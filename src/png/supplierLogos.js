import React from 'react';
import dispatchLogo from './supplier-logos/dispatch.png';
import freshMTLLogo from './supplier-logos/freshMTL.png';
import roastersPackLogo from './supplier-logos/roasters-pack.png';
import balticClubLogo from './supplier-logos/baltic-club.png';
import blumeLogo from './supplier-logos/blume.png';
import soulRoastersLogo from './supplier-logos/soul-roasters.png';
import lunaYogaLogo from './supplier-logos/luna-yoga.png';
import eviveLogo from './supplier-logos/evive.png';
import oatboxLogo from './supplier-logos/oatbox.png';

const SupplierLogo = (img, alt, href) => (
    <a href={href} target="_blank">
      <img src={img} alt={alt} className="h-20 w-20 mx-4" />
    </a>
);


const DispatchLogo = () => SupplierLogo(dispatchLogo, 'Dispatch Coffee', 'https://dispatchcoffee.ca/');
const FreshMTLLogo = () => SupplierLogo(freshMTLLogo, 'Fresh MTL', 'https://freshmtl.ca/');
const RoastersPackLogo = () => SupplierLogo(roastersPackLogo, 'Roaster\'s Pack', 'https://theroasterspack.com/');
const BalticClubLogo = () => SupplierLogo(balticClubLogo, 'Baltic Club', 'https://thebalticclub.com/');
const BlumeLogo = () => SupplierLogo(blumeLogo, 'Blume', 'https://itsblume.com/');
const SoulRoastersLogo = () => SupplierLogo(soulRoastersLogo, 'SoulRoasters', 'https://www.soulroasters.com/');
const LunaYogaLogo = () => SupplierLogo(lunaYogaLogo, 'LunaYoga', 'https://www.lunayoga.ca/');
const EviveLogo = () => SupplierLogo(eviveLogo, 'Evive', 'https://en.evivesmoothie.com/');
const OatboxLogo = () => SupplierLogo(oatboxLogo, 'Oatbox', 'https://www.oatbox.com/');
export { EviveLogo, OatboxLogo, LunaYogaLogo, DispatchLogo, FreshMTLLogo, RoastersPackLogo , BalticClubLogo, BlumeLogo, SoulRoastersLogo };