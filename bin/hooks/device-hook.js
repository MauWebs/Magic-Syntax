import os from 'os';
import { execSync } from 'child_process';
import pkg from 'node-machine-id';

const getDeviceInfo = () => {

  const { machineIdSync } = pkg;
  const interfaces = os.networkInterfaces();
  let privateIP = '';
  let macAddress = '';

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        privateIP = iface.address;
        macAddress = iface.mac;
        break;
      };
    };
  };

  const hostname = os.hostname() || '';
  const platform = os.platform() || '';
  const arch = os.arch() || '';
  let deviceId = '';

  try {
    if (platform === 'linux' || platform === 'darwin') {
      deviceId = execSync('cat /etc/machine-id').toString().trim();
    } else if (platform === 'win32') {
      deviceId = execSync('wmic csproduct get uuid').toString().split('\n')[1].trim();
    };
  } catch (error) {
    console.error('Error getting device ID:', error);
  };

  const machineIdValue = machineIdSync() || '';

  return {
    privateIP,
    macAddress,
    hostname,
    platform,
    arch,
    deviceId,
    machineId: machineIdValue
  };

};

export { getDeviceInfo };