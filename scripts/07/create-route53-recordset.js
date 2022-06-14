// Imports
const { ChangeResourceRecordSetsCommand } = require('@aws-sdk/client-route-53')
const { sendRoute53Command: sendCommand } = require('./helpers')

// Declare local variables
const hzId = '/* TODO: Add your hostedzone id */'

async function execute() {
  try {
    const response = await createRecordSet(hzId)
    console.log(response)
  } catch (err) {
    console.error('Error creating record set:', err)
  }
}

async function createRecordSet(hzId) {
  const params = {
    HostedZoneId: hzId, // HostedZoneId of the elastic load balancer
    ChangeBatch: {
      Changes: [
        {
          Action: 'CREATE',
          ResourceRecordSet: {
            Name: 'demo.hbfl.online',
            Type: 'A',
            AliasTarget: {
              DNSName: 'DNS name from the load balancer',
              EvaluateTargetHealth: false,
              HostedZoneId: 'Z35SXDOTRQ7X7K', // HostedZoneId specific to the region. Link to ELB Regions: https://docs.aws.amazon.com/general/latest/gr/elb.html
            },
          },
        },
      ],
    },
  }
  const command = new ChangeResourceRecordSetsCommand(params)
  return sendCommand(command)
}

execute()
