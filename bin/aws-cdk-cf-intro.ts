#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AwsCdkCfIntroStack } from "../lib/aws-cdk-cf-intro-stack";

const app = new cdk.App();
new AwsCdkCfIntroStack(app, "AwsCdkCfIntroStack");
