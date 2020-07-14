import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';

import HeroImage2 from '../png/HeroImage2';
import { Settings, Profile, Truck } from '../png/icons';
import { Diverse, Food, Offers } from '../png/benefits';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Making work from <span className="text-blue-500"> home </span> work for{' '}
            <span className="text-blue-500"> you </span>
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Build custom perk packages to turbocharge employee satisfaction and amplify productivity
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Sign Up for Early Access</Button>
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
                Choose from a selection of perk providers and set a monthly budget for each of your
                employees
              </p>
            </Card>
          </div>
          <div className="flex flex-1 px-3">
            <Card className="mb-8">
              <Profile />
              <p className="font-semibold text-xl">Employees select their package</p>
              <p className="mt-4">
                Employees select which perks they'd like to receive each month, and we provide
                vouchers to use with each supplier
              </p>
            </Card>
          </div>
          <div className="flex flex-1 px-3">
            <Card className="mb-8">
              <Truck />
              <p className="font-semibold text-xl">Enjoy perks delivered to your home</p>
              <p className="mt-4">
                Our suppliers send perks directly to your employees homes, to enjoy at their leisure
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
          <h3 className="text-3xl font-semibold leading-tight">Exclusive deals and discounts</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Access to monthly specials via our partnership network
          </p>
        </div>
      }
      secondarySlot={<Offers />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);
