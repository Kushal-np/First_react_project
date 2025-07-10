import { Phone, Mail, MapPin, Clock } from "lucide-react";

function ContactInformation() {
  return (
    <div className="    relative bg-gradient-to-br from-gray-900/40 to-gray-800/60 p-6 rounded-2xl border border-gray-600/40 backdrop-blur-sm fonty w-[10vh]">
      {/* Simple header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white fonty">
          Let's Connect
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
      </div>

      {/* Contact items */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-colors">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <Phone className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-gray-400 text-sm">Call us</div>
            <div className="text-white font-medium">+1 (555) 123-4567</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-colors">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Mail className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-gray-400 text-sm">Email</div>
            <div className="text-white font-medium">hello@lume.dev</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-colors">
          <div className="p-2 bg-green-500/20 rounded-lg">
            <MapPin className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <div className="text-gray-400 text-sm">Location</div>
            <div className="text-white font-medium">San Francisco, CA</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800/40 transition-colors">
          <div className="p-2 bg-orange-500/20 rounded-lg">
            <Clock className="w-4 h-4 text-orange-400" />
          </div>
          <div>
            <div className="text-gray-400 text-sm">Hours</div>
            <div className="text-white font-medium">Mon-Fri, 9AM-6PM</div>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 pt-4 border-t border-gray-700/50">
        <p className="text-gray-400 text-sm">
          Usually respond within a few hours ⚡
        </p>
      </div>
    </div>
  );
}

export default ContactInformation;