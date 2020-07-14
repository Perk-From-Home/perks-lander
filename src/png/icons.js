import React from 'react';
import truckIcon from './delivery-truck.png';
import settingsIcon from './agenda.png';
import profileIcons from './profile.png';
import logo from './logo.png';

const Icon = img => <img src={img} className="w-24 mx-auto mb-2" />;

const Truck = () => Icon(truckIcon);
const Settings = () => Icon(settingsIcon);
const Profile = () => Icon(profileIcons);
const Logo = () => Icon(logo);
export { Truck, Settings, Profile, Logo };
