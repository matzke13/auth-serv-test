import express from 'express';
import asyncHandler from 'express-async-handler';

import test from '../controllers/test.js';
import isSignedIn from '../controllers/auth.js';

const router = express.Router();

router.get('/', isSignedIn, asyncHandler(test));

export default router;
