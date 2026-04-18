interface LocationMapProps {
  latitude: number;
  longitude: number;
  locationName?: string;
}

export function LocationMap({ latitude, longitude, locationName = 'Our Office' }: LocationMapProps) {
  // Create Google Maps embed URL
  const embedUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&output=embed`;
  
  // Create Google Maps link for "View larger map"
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <div className="relative h-full w-full">
      <iframe
        title={locationName}
        src={embedUrl}
        style={{ 
          border: 0, 
          width: '100%', 
          height: '100%',
          borderRadius: '8px'
        }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute bottom-4 right-4">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#4A5D4E] px-4 py-2 rounded-lg shadow-lg hover:bg-[#F5EFE6] transition-colors text-sm font-medium"
        >
          View Larger Map
        </a>
      </div>
    </div>
  );
}
