import React from 'react';
import truckIcon from './delivery-truck.png';
import settingsIcon from './agenda.png';
import profileIcons from './profile.png';
import logo from './PFH.png';

const Icon = (img, alt) => <img src={img} alt={alt} className="w-24 mx-auto mb-2" />;
const PFHLogo = (img, alt) => (
  <img
    src={img}
    alt={alt}
    className="object-contain h-20 md:h-32 mb-2"
    style={{ margin: '0 auto' }}
  />
);

const Truck = () => Icon(truckIcon, 'Icon of a truck');
const Settings = () => Icon(settingsIcon, 'Icon for settings');
const Profile = () => Icon(profileIcons, 'Icon for a personal profile');
const Logo = () => PFHLogo(logo, 'Perk From Home Logo');
export { Truck, Settings, Profile, Logo };
