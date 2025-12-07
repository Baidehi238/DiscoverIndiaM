export default function Frame() {
  return (
    <div className="font-['Inter:Medium',sans-serif] font-medium leading-[1.5] not-italic relative size-full text-[#1e1e1e] text-[24px] tracking-[-0.456px]">
      <p className="absolute left-0 text-nowrap top-[11px] whitespace-pre">{`I. Aesthetic & Global Design Requirements`}</p>
      <div className="absolute left-0 top-[859px] w-[1040px]">
        <p className="mb-0">{`II. 🗺️ Page Structure & Detailed Requirements`}</p>
        <p>The website requires six distinct pages, all accessible via a persistent Navigation Bar.</p>
      </div>
      <p className="absolute left-0 text-nowrap top-[943.73px] whitespace-pre">1. 🏠 Home Page</p>
      <p className="absolute left-[1382px] text-nowrap top-[466px] whitespace-pre">Monument Detail Page (Mandatory Sub-Page):</p>
      <div className="absolute left-[1382px] text-nowrap top-0 whitespace-pre">
        <p className="mb-0">2. 🏛️ Monuments Page</p>
        <p>{`The gateway to India's heritage sites.`}</p>
      </div>
      <div className="absolute left-[2534px] top-0 w-[672px]">
        <p className="mb-0">4. 🌄 Destinations Page</p>
        <p>Focus on travel and tourism.</p>
      </div>
      <div className="absolute left-[1382px] text-nowrap top-[1089px] whitespace-pre">
        <p className="mb-0">3. 🎎 Culture Page</p>
        <p>{`Celebrating India's diversity.`}</p>
      </div>
      <p className="absolute left-[2534px] text-nowrap top-[549px] whitespace-pre">5. 📧 Contact / Feedback Page</p>
      <div className="absolute left-[2534px] top-[957px] w-[672px]">
        <p className="mb-0">6. 🧭 Plan Your Visit (Differentiated)</p>
        <p>This is the flagship interactive feature.</p>
      </div>
      <p className="absolute left-[3702px] top-[7px] w-[512px]">III. ⚙️ Technical Design Elements (For Figma Handoff)</p>
    </div>
  );
}