/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-useless-catch */
import * as crypto from 'crypto';
import { Gender } from 'src/titan-profile/enums/profile.enum';

export const CommonMethods = {
  encryptMD5(phone: string, countryCode: string): string {
    try {
      const salt = process.env.SALT;
      const dataToHash = countryCode.replaceAll(/\D/g, '') + phone + salt;
      const userHash = crypto
        .createHash('md5')
        .update(dataToHash)
        .digest('hex');
      return userHash;
    } catch (err) {
      throw err;
    }
  },

  encryptAES(plainText: string): string {
    try {
      const iv = process.env.IV;
      const securityKey = process.env.SECURITY_KEY;
      if (!iv || !securityKey) throw new Error('Missing env variables');
      const cipher = crypto.createCipheriv('aes-256-cbc', securityKey, iv);
      return Buffer.concat([cipher.update(plainText), cipher.final()]).toString(
        'base64',
      );
    } catch (err) {
      throw err;
    }
  },

  decryptAES(cipherText: string): string {
    try {
      const iv = process.env.IV;
      const securityKey = process.env.SECURITY_KEY;
      if (!iv || !securityKey) throw new Error('Missing env variables');
      const decipher = crypto.createDecipheriv('aes-256-cbc', securityKey, iv);
      return Buffer.concat([
        decipher.update(cipherText, 'base64'),
        decipher.final(),
      ]).toString('utf8');
    } catch (err) {
      throw err;
    }
  },

  maskString(
    inputString: string,
    inputLen: number,
    maskLength: number,
  ): string {
    try {
      if (inputString.length < inputLen) {
        throw new Error('Input string must be ${inputLen} characters long');
      }
      const lastFourChars = inputString.slice(-4);
      const maskedString = 'x'.repeat(maskLength) + lastFourChars;

      return maskedString;
    } catch (err) {
      throw err;
    }
  },
  getGender(gender: string) {
    switch (gender) {
      case 'MALE':
        return Gender.Male;
      case 'FEMALE':
        return Gender.Female;
      case 'OTHER':
        return Gender.Other;
      default:
        return;
    }
  },
};
