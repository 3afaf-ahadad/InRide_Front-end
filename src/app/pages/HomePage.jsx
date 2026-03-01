import { HeroSection } from '../components/HeroSection.jsx';
import { ServicesSection } from '../components/ServicesSection.jsx';
import { TeamSection } from '../components/TeamSection.jsx';
import { Footer } from '../components/Footer.jsx';

export function HomePage() {
  // Image URLs from Unsplash
  const heroImage = "https://images.unsplash.com/photo-1610766456229-a613e4f93814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwU1VWJTIwY2l0eSUyMG5pZ2h0JTIwZHVza3xlbnwxfHx8fDE3NzIyMzE3NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080";
  
  const teamImages = [
    "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMTQzMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjE5NTc4NHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMTUwNTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <>
      <HeroSection heroImage={heroImage} />
      <ServicesSection />
      <TeamSection teamImages={teamImages} />
      <Footer />
    </>
  );
}
