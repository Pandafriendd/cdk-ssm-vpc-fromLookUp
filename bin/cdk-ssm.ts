#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkSsmStack } from '../lib/cdk-ssm-stack';
import { VpcStack } from '../lib/vpc';

const app = new cdk.App();

new CdkSsmStack(app, 'CdkSsmStack', {
    env: {
        account: '457175632986',
        region: 'us-east-1',
    },
});

new VpcStack(app, 'VpcStack', {
    env: {
        account: '457175632986',
        region: 'us-east-1',
    },
});
