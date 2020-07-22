import React from 'react';
import truckIcon from './delivery-truck.png';
import settingsIcon from './agenda.png';
import profileIcons from './profile.png';
import logo from './PFH.png';

const Icon = img => <img src={img} className="w-24 mx-auto mb-2" />;
const PFHLogo = img => (
  <img src={img} className="object-contain h-20 md:h-32 mb-2" style={{ margin: '0 auto' }} />
);

const Truck = () => Icon(truckIcon);
const Settings = () => Icon(settingsIcon);
const Profile = () => Icon(profileIcons);
const Logo = () => PFHLogo(logo);
export { Truck, Settings, Profile, Logo };
