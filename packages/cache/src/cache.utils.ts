import { BinaryToTextEncoding, createHash } from 'crypto';

export function hashString(
  input: string,
  algorithm: string = 'sha256',
  digest: BinaryToTextEncoding = 'hex',
) {
  return createHash(algorithm).update(input).digest(digest);
}
