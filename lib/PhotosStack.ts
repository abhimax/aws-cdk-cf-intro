import { Construct } from "constructs";
import * as cdk from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";

export class PhotosStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, "PhotosBucket-abhimanranaweera", {
      bucketName: "photosbucket-abhimanranaweera-123",
    });

    // create a new resource
    // delete the old one
  }
}
