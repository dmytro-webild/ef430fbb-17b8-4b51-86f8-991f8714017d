import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesMediaCards from '@/components/sections/features/FeaturesMediaCards';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroSplitVerticalMarquee from '@/components/sections/hero/HeroSplitVerticalMarquee';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TeamProfileCards from '@/components/sections/team/TeamProfileCards';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitVerticalMarquee
      tag="Your Ultimate PC Store"
      title="COMPUSTAR"
      description="Dream. Build. Play. Premium computer parts. Genuine products. Better performance. No compromises."
      primaryButton={{
        text: "Explore Products",
        href: "#products",
      }}
      secondaryButton={{
        text: "Build Your PC",
        href: "#build",
      }}
      leftItems={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HweT5uwSMtSyntCQeShb6NrmLY/uploaded-1786791480720-2qjcav09.png?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cyberpunk-circuit-board_23-2151977489.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/neon-motherboard-background_23-2151704830.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/hard-drive-with-blue-light-laptop-high-angle_23-2149417021.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/technology-background-texture_23-2148105508.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/industry-40-photovoltaics-plant-admin-using-digital-device-app_482257-126123.jpg",
        },
      ]}
      rightItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-rgb-led-lights-system-desktop-woman-gamer-playing-space-shoother-video-games-online-championship-gaming-studio-equipped-with-professional-streaming-setup_482257-29255.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/electronic-waste-isolated-white_93675-135866.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-storage-device-laptop_23-2149319341.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/technology-background-texture_23-2148105522.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-hard-drive-components_23-2149413382.jpg",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HweT5uwSMtSyntCQeShb6NrmLY/uploaded-1786791480720-2qjcav09.png?_wi=2",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesMediaCards
      tag="Why Compustar"
      title="Better Parts. Bigger Possibilities."
      description="We ensure every build and component meets the highest standards of performance and reliability."
      items={[
        {
          title: "100% Genuine Products",
          description: "Authentic hardware with full manufacturer warranty support.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-using-ar-technology-perform-their-occupation_23-2151137479.jpg",
        },
        {
          title: "Fast Delivery",
          description: "Across India, we ensure your components arrive safely and on time.",
          imageSrc: "http://img.b2bpic.net/free-photo/circuit-board-close-up-with-different-components_23-2149174308.jpg",
        },
        {
          title: "Expert Support",
          description: "Technical guidance from enthusiasts who actually build the machines.",
          imageSrc: "http://img.b2bpic.net/free-photo/dark-style-lamp-design_23-2151105934.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="products" data-section="products">
    <SectionErrorBoundary name="products">
          <FeaturesRevealCardsBento
      tag="Curated Hardware"
      title="Showroom Experience"
      description="Browse our hand-picked selection of high-performance components."
      items={[
        {
          title: "Processors",
          description: "High-speed CPUs for gaming and work.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/control-table-spacecraft-from-inside_23-2151828148.jpg",
        },
        {
          title: "Cooling",
          description: "Keep your system frosty under pressure.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/cpu-processor-motherboard_53876-96834.jpg",
        },
        {
          title: "Cases",
          description: "Sleek chassis for every aesthetic.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/headphones-chair-gaming-setup_23-2149829131.jpg",
        },
        {
          title: "Graphics Cards",
          description: "Powering your visual experiences.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/circuit-board-close-up-with-different-components_23-2149174325.jpg",
        },
        {
          title: "Storage",
          description: "Lightning-fast NVMe and SSD drives.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/usb-type-c-port-warm-neon-scene-tech-macro_169016-71583.jpg",
        },
        {
          title: "Power Supplies",
          description: "Reliable, efficient energy delivery.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-texture-background_23-2148105458.jpg",
        },
        {
          title: "Motherboards",
          description: "The foundation of your dream build.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/technology-background-texture_23-2148105510.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Our Impact"
      title="Built for Performance"
      description="Empowering creators and gamers across the nation."
      metrics={[
        {
          value: "15,000+",
          description: "PCs Built",
        },
        {
          value: "4.9/5",
          description: "Customer Rating",
        },
        {
          value: "24h",
          description: "Support Response",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="Build Plans"
      title="Expert Custom Builds"
      description="Tiered configurations tailored to your needs."
      plans={[
        {
          tag: "Starter",
          price: "₹45,000",
          period: "/unit",
          features: [
            "Entry Gaming",
            "4K Video Editing",
            "1 Year Support",
          ],
          primaryButton: {
            text: "Select",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/red-themed-motherboard-with-memory-slots_23-2148284296.jpg",
        },
        {
          tag: "Enthusiast",
          price: "₹95,000",
          period: "/unit",
          features: [
            "Advanced Gaming",
            "3D Rendering",
            "2 Year Support",
          ],
          primaryButton: {
            text: "Select",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-hard-drive-components-blue-light_23-2149417026.jpg",
        },
        {
          tag: "Professional",
          price: "₹1,85,000",
          period: "/unit",
          features: [
            "Ultimate Power",
            "Multi-Tasking",
            "Lifetime Support",
          ],
          primaryButton: {
            text: "Select",
            href: "#",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/smart-microchip-background-motherboard-closeup-technology_53876-124725.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamProfileCards
      tag="Meet Our Experts"
      title="The Builders Behind Compustar"
      description="Technically adept professionals dedicated to quality."
      items={[
        {
          title: "Aarav Sharma",
          description: "Lead PC Building Specialist & Enthusiast.",
          avatarSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151099201.jpg",
          buttonText: "View Profile",
          imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349307.jpg",
        },
        {
          title: "Priya Iyer",
          description: "Hardware Performance Optimization Lead.",
          avatarSrc: "http://img.b2bpic.net/free-photo/brunette-businesswoman-posing_23-2148142754.jpg",
          buttonText: "View Profile",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-fantasy-scene_23-2151128042.jpg",
        },
        {
          title: "Vikram Singh",
          description: "Systems Architecture & Support Chief.",
          avatarSrc: "http://img.b2bpic.net/free-photo/positive-hipster-entrepreneur-it-expert-software-developer_74855-3635.jpg",
          buttonText: "View Profile",
          imageSrc: "http://img.b2bpic.net/free-photo/prism-dispersing-light-concept_23-2148599231.jpg",
        },
        {
          title: "Ananya Reddy",
          description: "Client Experience & Build Specialist.",
          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-content-pretty-businesswoman-glasses_1262-1740.jpg",
          buttonText: "View Profile",
          imageSrc: "http://img.b2bpic.net/free-photo/neon-motherboard-background_23-2151704761.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonial" data-section="testimonial">
    <SectionErrorBoundary name="testimonial">
          <TestimonialMarqueeCards
      tag="Our Clients"
      title="Voices of Excellence"
      description="Trusted by enthusiasts and creators throughout India."
      testimonials={[
        {
          name: "Rahul Verma",
          role: "Pro Gamer",
          quote: "The best PC build experience ever! Truly premium components.",
          imageSrc: "http://img.b2bpic.net/free-photo/joyful-young-woman-with-pixie-haircut-looking-side_141793-33142.jpg",
        },
        {
          name: "Sunita Rao",
          role: "3D Artist",
          quote: "My new workstation is a monster. Thanks Compustar team!",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-female-with-hair-bun-having-joyful-look-smiling-cheerfully-happy-with-some-positive-news_273609-9042.jpg",
        },
        {
          name: "Amit Kumar",
          role: "Video Editor",
          quote: "Genuine parts, great packaging, expert assistance.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg",
        },
        {
          name: "Divya M.",
          role: "Developer",
          quote: "Build quality is unmatched. Would buy again.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-son-father-playing-music_23-2148404197.jpg",
        },
        {
          name: "Karthik J.",
          role: "Creator",
          quote: "Finally found a place that takes PC builds seriously.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-man-using-tablet-night-city-lights_23-2149024666.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Your dream machine awaits. Talk to our build team today."
      primaryButton={{
        text: "Contact Support",
        href: "#",
      }}
      secondaryButton={{
        text: "Build Your PC",
        href: "#build",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
