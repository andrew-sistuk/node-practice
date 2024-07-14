import createHttpError from 'http-errors';
import bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { UsersCollection } from '../db/models/users.js';
import {
  ACCESS_TOKEN_LIFETIME,
  REFRESH_TOKEN_LIFETIME,
} from '../constans/index.js';
import { SessionCollection } from '../db/models/session.js';

export const createSession = (userId) => {
  return {
    userId,
    accessToken: randomBytes(30).toString('base64'),
    refreshToken: randomBytes(30).toString('base64'),
    accessTokenValidUntil: Date.now() + ACCESS_TOKEN_LIFETIME,
    refreshTokenValidUntil: Date.now() + REFRESH_TOKEN_LIFETIME,
  };
};

export const registerUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  if (user) {
    throw createHttpError(409, 'Email in use');
  }

  const encryptedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await UsersCollection.create({
    ...payload,
    password: encryptedPassword,
  });

  return newUser.toJSON();
};

export const loginUser = async (payload) => {
  const user = await UsersCollection.findOne({ email: payload.email });

  if (!user) {
    throw createHttpError(401, 'Email or passwor invalid');
  }

  const comparedPassword = await bcrypt.compare(
    payload.password,
    user.password,
  );

  if (!comparedPassword) {
    throw createHttpError(401, 'Email or passwor invalid');
  }

  const session = createSession(user._id);

  await SessionCollection.findOneAndDelete({ userId: user._id });

  const newSession = await SessionCollection.create(session);
  return newSession;
};
