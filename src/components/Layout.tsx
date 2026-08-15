import FooterBasic from '@/components/sections/footer/FooterBasic';
import CustomNavbar from '@/components/CustomNavbar';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#"
  },
  {
    "name": "Shop",
    "href": "#products"
  },
  {
    "name": "Build PC",
    "href": "#build"
  },
  {
    "name": "Deals",
    "href": "#pricing"
  },
  {
    "name": "Support",
    "href": "#contact"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Hero",
    "href": "#hero"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <CustomNavbar navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Components",
              href: "#products",
            },
            {
              label: "Custom Builds",
              href: "#build",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Build Guide",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      leftText="© 2024 Compustar. Built for Better."
      rightText="Designed with futuristic aesthetics."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
