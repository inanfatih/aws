// Imports

const { EC2Client, DescribeInstancesCommand } = require('@aws-sdk/client-ec2')

function sendCommand(command) {
  const client = new EC2Client({ region: process.env.AWS_REGION })
  return client.send(command)
}

async function listInstances() {
  // TODO: List instances using DescribeInstancesCommand
  const command = new DescribeInstancesCommand({})
  return sendCommand(command)
}

async function terminateInstance(instanceId) {
  // TODO: Terminate an instance with a given instanceId
}

listInstances().then(console.log)
// terminateInstance().then(console.log)
