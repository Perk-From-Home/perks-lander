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
import nakedSnacksLogo from './supplier-logos/naked-snacks.png';
import kittelLogo from './supplier-logos/kittel.png';

const SupplierLogo = (img, alt, href) => (
  <div className="flex md:w-1/6 w-1/3">
    <a href={href} target="_blank" className="flex content-center">
      <img src={img} alt={alt} className="p-4 inline-block mt-auto mb-auto align-center" />
    </a>
  </div>
);

const DispatchLogo = () =>
  SupplierLogo(dispatchLogo, 'Dispatch Coffee', 'https://dispatchcoffee.ca/');
const FreshMTLLogo = () => SupplierLogo(freshMTLLogo, 'Fresh MTL', 'https://freshmtl.ca/');
const RoastersPackLogo = () =>
  SupplierLogo(roastersPackLogo, "Roaster's Pack", 'https://theroasterspack.com/');
const BalticClubLogo = () =>
  SupplierLogo(balticClubLogo, 'Baltic Club', 'https://thebalticclub.com/');
const BlumeLogo = () => SupplierLogo(blumeLogo, 'Blume', 'https://itsblume.com/');
const SoulRoastersLogo = () =>
  SupplierLogo(soulRoastersLogo, 'SoulRoasters', 'https://www.soulroasters.com/');
const LunaYogaLogo = () => SupplierLogo(lunaYogaLogo, 'LunaYoga', 'https://www.lunayoga.ca/');
const EviveLogo = () => SupplierLogo(eviveLogo, 'Evive', 'https://en.evivesmoothie.com/');
const OatboxLogo = () => SupplierLogo(oatboxLogo, 'Oatbox', 'https://www.oatbox.com/');
const NakedSnacksLogo = () =>
  SupplierLogo(nakedSnacksLogo, 'Naked Snacks', 'https://www.nakedsnacks.ca/');
const KittelLogo = () => SupplierLogo(kittelLogo, 'Kittel', 'https://kittelcoffee.com/?locale=en');

export {
  KittelLogo,
  NakedSnacksLogo,
  EviveLogo,
  OatboxLogo,
  LunaYogaLogo,
  DispatchLogo,
  FreshMTLLogo,
  RoastersPackLogo,
  BalticClubLogo,
  BlumeLogo,
  SoulRoastersLogo
};
