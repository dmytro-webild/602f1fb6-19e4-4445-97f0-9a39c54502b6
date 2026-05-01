"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Car, Flame, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Menu", id: "menu" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Dragon Wok"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{ variant: "gradient-bars" }}
      title="Authentic Flavors at Dragon Wok"
      description="Experience the best Chinese cuisine in Multan. From our signature Hot & Sour Soup to sizzling Sesame Chicken, we deliver perfection in every bite."
      testimonials={[
        { name: "Zulqarnain", handle: "@zulqarnain", testimonial: "Chicken chilli dry is very good in taste. Overall reasonable price and a great Chinese option.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/enjoying-street-food-fest_23-2151543715.jpg" },
        { name: "Wajid Rana", handle: "@wajidrana", testimonial: "Truly a hidden gem for Desi-Chinese lovers! Friendly staff and delicious food.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiling-young-man-standing-table-various-pastries-it-holding-bank-card-making-ok-gesture-white-kitchen_140725-97193.jpg" },
        { name: "Saba Jutt", handle: "@sabajutt", testimonial: "One of the Best Chinese Food Restaurants in Multan! 10/10 in taste.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/young-happy-man-his-friends-bringing-food-dining-table-while-having-lunch-together-home_637285-5856.jpg" },
        { name: "Ali Khan", handle: "@alikhan", testimonial: "Incredible flavors, fast delivery. Will definitely order again.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/surprised-adult-male-cook-wearing-chef-uniform-glasses-holding-apples-looking-one-them-isolated-orange-background_141793-105226.jpg" },
        { name: "Sara Ahmed", handle: "@saraahmed", testimonial: "The ambiance is great and the staff is very well-mannered.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-work_23-2149304143.jpg" },
      ]}
      buttons={[
        { text: "View Menu", href: "#menu" },
        { text: "Order Now", href: "tel:+923001939001" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/shanghai-old-building_649448-3951.jpg"
      imageAlt="Authentic Chinese Cuisine"
      mediaAnimation="blur-reveal"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/front-view-people-eating-asian-food_23-2150288286.jpg", alt: "Customer" },
        { src: "http://img.b2bpic.net/free-photo/people-enjoying-japanese-street-food_23-2149319457.jpg", alt: "Customer" },
        { src: "http://img.b2bpic.net/free-photo/medium-shot-people-eating-asian-food_23-2150288274.jpg", alt: "Customer" },
        { src: "http://img.b2bpic.net/free-photo/young-adult-enjoying-japanese-street-food_23-2149319431.jpg", alt: "Customer" },
        { src: "http://img.b2bpic.net/free-photo/pleasant-looking-stylish-bearded-man-speaks-smart-phone_273609-8930.jpg", alt: "Customer" },
      ]}
      marqueeItems={[
        { type: "text", text: "Freshly Prepared" },
        { type: "text", text: "Authentic Spices" },
        { type: "text", text: "Fast Delivery" },
        { type: "text", text: "Quality Assured" },
        { type: "text", text: "Satisfied Customers" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Dragon Wok - Multan's Hidden Gem" },
        { type: "image", src: "http://img.b2bpic.net/free-photo/cook-is-fry-vegetables-with-spices-sauce-wok-flame-cooking-process-asian-restaurant_613910-4979.jpg", alt: "Dragon Wok Kitchen" },
        { type: "text", content: "Located behind Dubai Plaza, we are dedicated to serving the finest Chinese-Desi fusion flavors with fresh ingredients and authentic techniques." },
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="blur-reveal"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Chicken Hot & Sour Soup", price: "Rs 450", imageSrc: "http://img.b2bpic.net/free-photo/vertical-high-angle-shot-bowl-noodles-meat-some-chopsticks-table_181624-19341.jpg" },
        { id: "p2", name: "Sesame Chicken", price: "Rs 850", imageSrc: "http://img.b2bpic.net/free-photo/delicious-trout-meal-arrangement_23-2150353379.jpg" },
        { id: "p3", name: "Dynamite Chicken", price: "Rs 750", imageSrc: "http://img.b2bpic.net/free-photo/front-view-tasty-chicken-slices-with-mushed-potatoes-brown-desk-dish-meal-dinner-meat-potato_140725-95377.jpg" },
        { id: "p4", name: "Dragon Chowmein", price: "Rs 600", imageSrc: "http://img.b2bpic.net/free-photo/noodles-prepared-with-mushrooms-bell-peppers-sauce_141793-884.jpg" },
        { id: "p5", name: "Kung Pao Chicken", price: "Rs 800", imageSrc: "http://img.b2bpic.net/free-photo/sweet-sour-duck-with-vegetables-pepper-plate_141793-1686.jpg" },
        { id: "p6", name: "Mozz Mozzarella Sticks", price: "Rs 400", imageSrc: "http://img.b2bpic.net/free-photo/top-view-fried-nuggets-ketcup-turmeric-powder-red-pepper-little-bowl-green-white-plate_176474-120153.jpg" },
      ]}
      title="Our Popular Menu"
      description="Discover our signature dishes loved by the people of Multan."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureHoverPattern
      animationType="blur-reveal"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Fresh Ingredients", description: "We source the freshest vegetables and meat for every dish.", icon: Leaf },
        { title: "Authentic Taste", description: "Traditional recipes with a local Desi-Chinese twist.", icon: Flame },
        { title: "Delivery Services", description: "Fast no-contact delivery to your doorstep.", icon: Car },
      ]}
      title="Why Dragon Wok?"
      description="We prioritize quality and customer satisfaction above everything else."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Dragon Wok is truly the best Chinese food in Multan. Every bite is an explosion of authentic flavor!"
      rating={5}
      author="Saba Jutt"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/young-happy-woman-her-friends-having-fun-while-drinking-wine-lunch-time-home_637285-3187.jpg", alt: "Saba Jutt" },
        { src: "http://img.b2bpic.net/free-photo/group-happy-young-adults-toasting-having-fun-while-having-lunch-together-dining-room_637285-3568.jpg", alt: "Happy Group" },
        { src: "http://img.b2bpic.net/free-photo/group-young-happy-people-communicating-while-having-lunch-together-dining-room_637285-3564.jpg", alt: "Happy Group" },
        { src: "http://img.b2bpic.net/free-photo/young-happy-people-having-fun-toasting-with-beer-while-eating-lunch-dining-room-home_637285-5546.jpg", alt: "Happy Group" },
        { src: "http://img.b2bpic.net/free-photo/group-young-happy-friends-enjoying-lunch-focus-is-african-american-woman-serving-salad-dining-table_637285-2870.jpg", alt: "Happy Group" },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={["FoodPanda", "Cheetay", "Careem Food", "Swvl", "EatOye", "Rocket Delivery", "Multan Eats"]}
      title="Our Trusted Delivery Partners"
      description="Partnering with the city's finest logistics to bring heat-sealed goodness to your door."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "What are your opening hours?", content: "We are open daily from 12 PM to 12 AM." },
        { id: "q2", title: "Do you offer delivery?", content: "Yes, we provide fast no-contact delivery across Multan." },
        { id: "q3", title: "Is the food spicy?", content: "We offer various spice levels to accommodate your preference." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/calling-by-lunch_1098-12843.jpg"
      title="Frequently Asked Questions"
      description="Have questions? We've got answers."
      faqsAnimation="blur-reveal"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "gradient-bars" }}
      title="Visit Us Today"
      description="Shop 1007-1008, Behind Dubai Plaza, Multan Cantt."
      buttonText="Send Message"
      tag="Contact Us"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        { title: "Information", items: [{ label: "About Us", href: "#about" }, { label: "Menu", href: "#menu" }] },
        { title: "Contact", items: [{ label: "+92 300 1939001", href: "tel:+923001939001" }, { label: "Location", href: "#contact" }] },
      ]}
      logoText="Dragon Wok"
      copyrightText="© 2025 Dragon Wok Multan"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
