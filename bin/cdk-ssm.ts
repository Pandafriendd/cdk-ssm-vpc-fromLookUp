#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSsmStack } from '../lib/cdk-ssm-stack';

const app = new cdk.App();
new CdkSsmStack(app, 'CdkSsmStack');
