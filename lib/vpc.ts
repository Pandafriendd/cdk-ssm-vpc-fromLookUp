import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';import * as ssm from '@aws-cdk/aws-ssm';

export class VpcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "vpc");

    // create an SSM parameters which store export VPC ID
    new ssm.StringParameter(this, 'VPCID', {
      parameterName: `/VPCStack/VPCID`,
      stringValue: vpc.vpcId
    })
  }
}