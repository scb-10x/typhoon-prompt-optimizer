const TYPHOON_BASE_URL = process.env.TYPHOON_BASE_URL || 'https://api.opentyphoon.ai/v1';
const TYPHOON_API_KEY = process.env.TYPHOON_API_KEY || process.env.OPENAI_API_KEY;
const TYPHOON_MODEL = process.env.TYPHOON_MODEL || 'typhoon-v2-r1-70b-preview';

export { TYPHOON_BASE_URL, TYPHOON_API_KEY, TYPHOON_MODEL };
