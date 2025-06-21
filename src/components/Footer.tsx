
import { Heart, Shield, Clock, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Report Issues</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Groups</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Trust & Safety</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Consent Verified</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-pink-400" />
                <span className="text-sm">LGBTQ+ Friendly</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-sm">24/7 Safety Team</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-sm">Verified Couples</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center space-y-4">
          <p className="text-gray-300">
            © 2024 Intentional Connections. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Built with love for meaningful connections in a safe, inclusive environment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
