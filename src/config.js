export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY:
    "pk_test_51HAjXmFeB5e0LAgRrdZV0ov4i9ALknBOHFxAtQ4wF1JqBpND4NVdrYoi3nPODfuGOnfwsINefjzanwQKUtOFxH9q00EAnIGj3t",
  s3: {
    REGION: "eu-north-1",
    BUCKET: "auktionera-uploads",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://c9figduspi.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_uZmaIIRKe",
    APP_CLIENT_ID: "4f9o2m9e7n8lc6skm5huroos46",
    IDENTITY_POOL_ID: "us-east-2:47f3bc5a-636f-4bee-ad11-79b9abdf93dc",
  },
};
