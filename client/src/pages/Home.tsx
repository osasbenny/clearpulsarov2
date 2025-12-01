import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Smartphone, Globe, FileText, HeadphonesIcon, Zap, ArrowRight, CheckCircle2, Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState("EN");
  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "FR", name: "Français" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating Live Chat Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-110">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img src="/logo.png" alt="ClearPulse" className="h-10 w-10" />
              <span className="text-2xl font-bold text-[#301CA0]">ClearPulse</span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/"><a className="text-gray-700 hover:text-[#7132CA] transition-colors">Home</a></Link>
            <Link href="/services"><a className="text-gray-700 hover:text-[#7132CA] transition-colors">Services</a></Link>
            <Link href="/about"><a className="text-gray-700 hover:text-[#7132CA] transition-colors">About</a></Link>
            <Link href="/apply"><a className="text-gray-700 hover:text-[#7132CA] transition-colors">Apply Now</a></Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="https://dashboard.clearpulsaro.com/" className="text-gray-700 hover:text-[#7132CA] transition-colors flex items-center gap-1">
              <User className="h-5 w-5" /> Sign in
            </a>
            <Link href="/contact"><a className="text-gray-700 hover:text-[#7132CA] transition-colors">Contact us</a></Link>
          </div>

          {/* Mobile Navigation (Hamburger Menu) */}
          <div className="md:hidden flex items-center gap-4">
            <a href="https://dashboard.clearpulsaro.com/" className="text-gray-700 hover:text-[#7132CA] transition-colors flex items-center gap-1">
              <User className="h-5 w-5" /> Sign in
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="border-none p-0">
                  <Menu className="h-6 w-6 text-red-600" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 pt-8 text-center">
                  <Link href="/"><a className="text-gray-700 hover:text-[#7132CA] transition-colors text-lg">Home</a></Link>
                  <Link href="/services"><a className="text-gray-700 hover:text-[#7132CA] transition-colors text-lg">Services</a></Link>
                  <Link href="/about"><a className="text-gray-700 hover:text-[#7132CA] transition-colors text-lg">About</a></Link>
                  <Link href="/apply"><a className="text-gray-700 hover:text-[#7132CA] transition-colors text-lg">Apply Now</a></Link>
                  <Link href="/contact"><a className="text-gray-700 hover:text-[#7132CA] transition-colors text-lg">Contact us</a></Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-black relative overflow-hidden">
        {/* Decorative circles */}
                <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Mobile Carousel for Hero Section */}
              <div className="md:hidden">
                <Carousel
                  opts={{ align: "start", loop: true }}
                  plugins={[Autoplay({ delay: 5000 })]}
                  className="w-full relative"
                >
                  <CarouselContent>
                    {/* Slide 1 */}
                    <CarouselItem>
                      <div className="p-1">
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                          Innovative Banking Solutions
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Explore our range of personalized services.
                        </p>
                        <a href="https://dashboard.clearpulsaro.com/" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 text-lg">
                            Learn More
                          </Button>
                        </a>
                      </div>
                    </CarouselItem>
                    {/* Slide 2 */}
                    <CarouselItem>
                      <div className="p-1">
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                          Secure and Reliable
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Your finances are safe with our top-tier security.
                        </p>
                        <a href="https://dashboard.clearpulsaro.com/" target="_blank" rel="noopener noreferrer">
                          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 text-lg">
                            Our Security
                          </Button>
                        </a>
                      </div>
                    </CarouselItem>
                    {/* Slide 3 */}
                    <CarouselItem>
                      <div className="p-1">
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                          Global Access
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Manage your accounts from anywhere in the world.
                        </p>
                        <Link href="/contact">
                          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 text-lg">
                            View Locations
                          </Button>
                        </Link>
                      </div>
                    </CarouselItem>
                    {/* Slide 4 */}
                    <CarouselItem>
                      <div className="p-1">
                        <h1 className="text-5xl font-bold mb-4 leading-tight">
                          Personalized Service
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          Dedicated support tailored to your financial needs.
                        </p>
                        <Link href="/about">
                          <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-3 text-lg">
                            Meet Our Team
                          </Button>
                        </Link>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-none" />
                  <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-none" />
                  <div className="flex justify-center mt-8">
                    {/* Simple indicator for the slides */}
                    <div className="flex space-x-2">
                      <div className="h-2 w-8 bg-white/50 rounded-full data-[active=true]:bg-red-600" data-active="true"></div>
                      <div className="h-2 w-8 bg-white/50 rounded-full"></div>
                      <div className="h-2 w-8 bg-white/50 rounded-full"></div>
                      <div className="h-2 w-8 bg-white/50 rounded-full"></div>
                    </div>
                  </div>
                </Carousel>
              </div>

              {/* Desktop Content */}
              <div className="hidden md:block">
                <p className="text-[#7132CA] font-semibold mb-4 tracking-wider uppercase text-sm">ClearPulse Banking</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Bank With Confidence,<br />
                  Harvest The Rewards
                </h1>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Mutual fund from ClearPulse Asset Management that invests in Greek and international 
                  corporate bonds in dollars, euros and pounds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start relative">
                  <a href="https://dashboard.clearpulsaro.com/" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-[#7132CA] hover:bg-[#301CA0] text-white rounded-full px-8 py-6 text-lg">
                      Open An Account Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-12 h-12 rounded-full bg-[#7132CA]/20 flex items-center justify-center">
                      <HeadphonesIcon className="h-6 w-6 text-[#7132CA]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Need help?</p>
                      <p className="font-semibold text-lg">+1 (313) 307-9393</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#7132CA] rounded-3xl transform rotate-12"></div>
              <img 
                src="/images/team-meeting.jpg" 
                alt="Banking Team" 
                className="relative z-10 rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
        {/* Mobile Language Selector at the bottom of the hero section - moved outside the grid for full width */}
        <div className="md:hidden fixed bottom-20 left-0 right-0 flex justify-center z-20">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="rounded-md gap-2 bg-white text-black shadow-lg">
                <img src={`/images/flag_${language.toLowerCase()}.png`} alt={`${language} flag`} className="h-4 w-4 rounded-full" />
                {language}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                {languages.map((lang) => (
                  <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                    <img src={`/images/flag_${lang.code.toLowerCase()}.png`} alt={`${lang.code} flag`} className="h-4 w-4 rounded-full mr-2" />
                    {lang.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* Experience Badge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/images/team-collaboration.jpg" 
                  alt="Team Collaboration" 
                  className="rounded-2xl shadow-lg"
                />
                <img 
                  src="/images/diverse-team.jpg" 
                  alt="Diverse Team" 
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#7132CA] text-white p-8 rounded-2xl shadow-xl">
                <div className="text-5xl font-bold">25</div>
                <div className="text-sm">Years Of<br />experience</div>
              </div>
            </div>
            <div>
              <p className="text-[#7132CA] font-semibold mb-4 tracking-wider uppercase text-sm">Banking With Ease</p>
              <h2 className="text-4xl font-bold text-[#301CA0] mb-6">
                Make your online transactions safely
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Find out what to look out for when transacting online and how we keep you safe. Find 
                practical tips and guidelines for safe trading.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#7132CA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#301CA0] mb-1">Online FX Conversion</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#7132CA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#301CA0] mb-1">Shipments and Shipments</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#7132CA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#301CA0] mb-1">Bulk Payments</h3>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[#7132CA] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#301CA0] mb-1">Privacy & Security Guaranteed</h3>
                  </div>
                </div>
              </div>
              <Link href="/about">
                <Button className="bg-[#7132CA] hover:bg-[#301CA0] text-white rounded-full px-8">
                  Visit Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#7132CA] font-semibold mb-4 tracking-wider uppercase text-sm">Bank With Us</p>
            <h2 className="text-4xl font-bold text-[#301CA0] mb-4">
              For convenience in the digital age
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#7132CA] rounded-xl flex items-center justify-center mb-6">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#301CA0] mb-3">
                  Come to ClearPulse
                </h3>
                <p className="text-gray-600 mb-6">
                  Open your first account at ClearPulse, and get a debit card and e-Banking 
                  codes from your mobile.
                </p>
                <img 
                  src="/images/banking-professionals.jpg" 
                  alt="Banking Professionals" 
                  className="rounded-xl w-full"
                />
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#7132CA] rounded-xl flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#301CA0] mb-3">
                  Log in to ClearPulse Web
                </h3>
                <p className="text-gray-600 mb-6">
                  Get full control of your transactions and banking products, at ClearPulse 
                  and other banks, from your computer.
                </p>
                <img 
                  src="/images/team-collaboration.jpg" 
                  alt="Web Banking" 
                  className="rounded-xl w-full"
                />
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#7132CA] rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#301CA0] mb-3">
                  Get ClearPulse Loan
                </h3>
                <p className="text-gray-600 mb-6">
                  Secure a consumer loan of up to $10,000 online. Apply from your mobile or 
                  computer, on the first day.
                </p>
                <img 
                  src="/images/diverse-team.jpg" 
                  alt="Loan Services" 
                  className="rounded-xl w-full"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#7132CA] font-semibold mb-4 tracking-wider uppercase text-sm">Our Work Process</p>
              <h2 className="text-4xl font-bold text-[#301CA0] mb-8">
                It's a pleasure doing business with you
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[#7132CA] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#301CA0] mb-2">Banking Services</h3>
                    <p className="text-gray-600">
                      ClearPulse has a great range of products to offer you complete banking services. 
                      So ditch your old bank and switch to ClearPulse today.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[#7132CA] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#301CA0] mb-2">Business Transaction Accounts</h3>
                    <p className="text-gray-600">
                      We offer easy to use accounts that are designed exclusively to meet your business needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-[#7132CA] rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#301CA0] mb-2">Cash Management Account</h3>
                    <p className="text-gray-600">
                      Want the flexibility of an everyday account with the interest of a term deposit? 
                      The Cash Management Account is for you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/team-meeting.jpg" 
                alt="Business Banking" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#7132CA] text-white p-8 rounded-2xl shadow-xl border-4 border-dashed border-white">
                <div className="text-center">
                  <div className="text-4xl font-bold">Over 500k</div>
                  <div className="text-sm mt-2">Active<br />Customers</div>
                </div>
              </div>
              <div className="absolute top-1/2 -right-12 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#301CA0]">38k+</div>
                  <div className="text-sm text-gray-600 mt-1">Business Accounts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#7132CA] to-[#C47BE4]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust ClearPulse for their banking needs. 
            Open your account today and experience the future of banking.
          </p>
          <a href="https://dashboard.clearpulsaro.com/" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-[#7132CA] hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold">
              Open an Account Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#301CA0] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
             <img src="/logo.png" alt="ClearPulse" className="h-10 w-10" />
                <span className="text-2xl font-bold">ClearPulse</span>
              </div>
              <p className="text-gray-300 text-sm max-w-md">
                Smart, simple, secure banking—at your fingertips
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/home"><a className="hover:text-white transition-colors">Home</a></Link></li>
                <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
                <li><Link href="/accounts"><a className="hover:text-white transition-colors">Accounts</a></Link></li>
                <li><Link href="/cards"><a className="hover:text-white transition-colors">Cards</a></Link></li>
                <li><Link href="/faqs"><a className="hover:text-white transition-colors">FAQs</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal Information</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/privacy"><a className="hover:text-white transition-colors">Privacy Policy</a></Link></li>
                <li><Link href="/terms"><a className="hover:text-white transition-colors">Terms and Conditions</a></Link></li>
              </ul>
              <h3 className="text-lg font-semibold mt-6 mb-4">Contact Information</h3>
              <p className="text-gray-300">Phone: +1 (313) 307-9393</p>
              <p className="text-gray-300">Email: info@clearpulsaro.com</p>
              <p className="text-gray-300">789 Enterprise Way, Floor 2, NY, New York, 10016</p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              {/* Language Selector in Footer */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-md gap-2 bg-white text-black shadow-lg">
                    <img src={`/images/flag_${language.toLowerCase()}.png`} alt={`${language} flag`} className="h-4 w-4 rounded-full" />
                    {language}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-32">
                  <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
                    {languages.map((lang) => (
                      <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                        <img src={`/images/flag_${lang.code.toLowerCase()}.png`} alt={`${lang.code} flag`} className="h-4 w-4 rounded-full mr-2" />
                        {lang.name}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <p className="text-gray-400">&copy; {new Date().getFullYear()} ClearPulse. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
