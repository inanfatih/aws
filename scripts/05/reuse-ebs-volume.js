// Imports
const {
  AttachVolumeCommand,
  DetachVolumeCommand,
} = require('@aws-sdk/client-ec2')
const { sendCommand, sleep } = require('./helpers')

// Declare local variables
const volumeId = 'vol-022bbd7b6b7a5a57a'
const instanceId = 'i-0b952a09cf22b23f6'

async function execute() {
  try {
    await detachVolume(volumeId)
    console.log('Detached volume:', volumeId)
    await sleep(3)
    await attachVolume(instanceId, volumeId)
    console.log(`Attached volume: ${volumeId} to instance: ${instanceId}`)
  } catch (err) {
    console.error('Could not attach volume:', err)
  }
}

async function detachVolume(volumeId) {
  const params = {
    volumeId: volumeId,
  }
  const command = new DetachVolumeCommand(params)
  return sendCommand(command)
}

async function attachVolume(instanceId, volumeId) {
  const params = {
    InstanceId: instanceId,
    VolumeId: volumeId,
    Device: '/dev/sdf',
  }
  const command = new AttachVolumeCommand(params)
  return sendCommand(command)
}

execute()
