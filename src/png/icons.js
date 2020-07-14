import React from 'react';
import truckIcon from './delivery-truck.png';
import settingsIcon from './agenda.png';
import profileIcons from './profile.png';

const Icon = img => <img src={img} className="h-24 mx-auto mb-2" />;

const Truck = () => Icon(truckIcon);
const Settings = () => Icon(settingsIcon);
const Profile = () => Icon(profileIcons);

export { Truck, Settings, Profile };
