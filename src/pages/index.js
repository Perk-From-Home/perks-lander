import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import SEO from '../components/seo';
import Helmet from 'react-helmet';
import { SocialIcon } from 'react-social-icons';

import customerData from '../data/customer-data';
import { CUSTOMER_GFORM_URL, PARTNER_GFORM_URL } from '../data/external-links';
import HeroImage2 from '../png/HeroImage2';
import { Settings, Profile, Truck } from '../png/icons';
import {
  KittelLogo,
  NakedSnacksLogo,
  OatboxLogo,
  EviveLogo,
  LunaYogaLogo,
  BlumeLogo,
  SoulRoastersLogo,
  BalticClubLogo,
  RoastersPackLogo,
  DispatchLogo,
  FreshMTLLogo
} from '../png/supplierLogos';
import { Diverse, Food, Community } from '../png/benefits';

export default () => (
  <Layout>
    <Helmet>
      <meta name="google-site-verification" content="MZ3s6oqcLLEq2YwnZkN7DFuijltSrJ4JmEZ4No8t0EU" />
    </Helmet>
    <SEO
      title="Perk From Home"
      description="Bringing office perks to WFH employees for better productivity, engagement, and satisfaction"
    />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Fuel your remote workforce with personalized perks
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Empower your employees to build perk packages they want, for a work from home lifestyle
            they love
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg" href={CUSTOMER_GFORM_URL}>
              Sign Up for Early Access
            </Button>
          </p>
          <p className="mt-4 text-gray-600">We will never share your email address</p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage2 />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-40">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">How It Works</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex flex-1 px-3">
            <Card className="mb-8">
              <Settings />
              <p className="font-semibold text-xl">Setup a PFH account for your company</p>
              <p className="mt-4">
                Define your perk options and set a monthly budget for each of your employees
              </p>
            </Card>
          </div>
          <div className="flex flex-1 px-3">
            <Card className="mb-8">
              <Profile />
              <p className="font-semibold text-xl">Employees select their package</p>
              <p className="mt-4">Employees choose how to spend their perk budget each month</p>
            </Card>
          </div>
          <div className="flex flex-1 px-3">
            <Card className="mb-8">
              <Truck />
              <p className="font-semibold text-xl">Employees enjoy home-delivered perks </p>
              <p className="mt-4">
                Our suppliers send perks directly to your employees' homes, to enjoy at their
                leisure
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Happy, healthy, and effective</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Keep employees engaged and motivated with a range of premium food, drink, and exercise
            options.
          </p>
        </div>
      }
      secondarySlot={<Food />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Variety is the spice of life</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Not everybody wants kombucha and ping pong tables. Provide perks as diverse as your
            employees.
          </p>
        </div>
      }
      secondarySlot={<Diverse />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Support local businesses</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We work with businesses to provide unique and authentic perks which give back to the
            community.
          </p>
        </div>
      }
      secondarySlot={<Community />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center mx-20">
        <LabelText className="mb-8 text-xl text-gray-600 text-center">
          Interested in joining our network of superstar suppliers?
        </LabelText>
        <div className="flex flex-row justify-center h-40 md:h-56 p-4">
          <OatboxLogo />
          <EviveLogo />
          <KittelLogo/>
        </div>
        <div className="flex md:flex-row justify-center h-40 md:h-56 p-4">
          <DispatchLogo />
          <RoastersPackLogo />
          <LunaYogaLogo />
        </div>
        <div className="flex md:flex-row justify-center h-40 md:h-56 p-4">
          <NakedSnacksLogo />
          <BlumeLogo />
          <SoulRoastersLogo />
        </div>
        <div className="flex md:flex-row justify-center h-40 md:h-56 p-4">
          <BalticClubLogo />
          <FreshMTLLogo />
        </div>
        <p className="text-lg mt-12 font-light p-10 pl-5 pr-5">
          Get in touch to discuss how we can get your awesome products to our fabulous customers
        </p>
        <Button size="xl" href={PARTNER_GFORM_URL}>
          Work with us
        </Button>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to delight your employees?</h3>
      <p className="mt-8 text-xl font-light">Get in touch about our early access program</p>
      <p className="mt-8">
        <Button size="xl" href={CUSTOMER_GFORM_URL}>
          Get Started Now
        </Button>
      </p>
    </section>
    <section id="contact" className="py-5 lg:py-5">
      <div className="container mx-auto">
        <LabelText className="mb-4 text-xl text-gray-600 text-center">Contact</LabelText>
        <div className="flex flex-row mt-8">
          <div className="flex flex-col flex-1 text-center">
            <p className="mb-3 text-gray-600">Reach out</p>
            <p className="mb-3">
              <a href="mailto:info@perkfromhome.ca">info@perkfromhome.ca</a>
            </p>
          </div>
          <div className="container flex-1 text-center">
            <p className="mb-3 text-gray-600">Follow us</p>
            <SocialIcon url="https://twitter.com/PerkFromHomeMTL" className="mx-1" />
            <SocialIcon
              url="https://www.facebook.com/Perk-From-Home-106639477807436"
              className="mx-1"
            />
            <SocialIcon url="https://www.linkedin.com/company/68685189/" className="mx-1" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
