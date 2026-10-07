import type { PlaceholderVisual } from "@/lib/types";

/**
 * Designed, abstract stand-ins for project screenshots. Purely illustrative:
 * they depict the *kind* of interface, not the real product.
 */
const box = "fill-surface stroke-line-strong";
const soft = "fill-surface-2";
const ln = "stroke-line-strong";
const acc = "fill-accent";
const accStroke = "stroke-accent";

function Browser({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <>
      <rect x="60" y="50" width="680" height="400" rx="14" className={dark ? "fill-fg/90 stroke-line-strong" : box} />
      <line x1="60" y1="88" x2="740" y2="88" className={dark ? "stroke-bg/20" : ln} />
      {[84, 102, 120].map((x) => (
        <circle key={x} cx={x} cy="69" r="4" className={dark ? "fill-bg/30" : soft} />
      ))}
      <rect x="170" y="60" width="300" height="18" rx="9" className={dark ? "fill-bg/15" : soft} />
      {children}
    </>
  );
}

function Hierarchy() {
  const cols = [90, 215, 340, 465, 590, 700];
  return (
    <>
      <rect x="40" y="40" width="720" height="420" rx="14" className={box} />
      {/* connectors */}
      <g className={`${ln} fill-none`} strokeWidth="1.5">
        <path d="M130 250 H165 V150 H215 M165 250 V350 H215" />
        <path d="M255 150 H290 V105 H340 M290 150 V195 H340" />
        <path d="M255 350 H290 V310 H340 M290 350 V390 H340" className={accStroke} />
        <path d="M380 195 H415 V160 H465 M415 195 V230 H465" />
        <path d="M380 390 H415 V355 H465 M415 390 V425 H465" className={accStroke} />
        <path d="M505 355 H540 V330 H590 M540 355 V385 H590" className={accStroke} />
        <path d="M630 330 H665 V310 H700 M665 330 V350 H700" className={accStroke} />
      </g>
      {[
        [90, 250], [215, 150], [215, 350], [340, 105], [340, 195], [340, 310], [340, 390],
        [465, 160], [465, 230], [465, 355], [465, 425], [590, 330], [590, 385], [700, 310], [700, 350],
      ].map(([x, y], i) => {
        const hot = [2, 5, 6, 9, 11, 13].includes(i);
        const w = x === 700 ? 56 : x === 90 ? 80 : 80;
        return (
          <g key={i}>
            <rect x={x - 40} y={y - 14} width={w} height="28" rx="7" className={hot ? "fill-accent-soft stroke-accent" : box} />
            <rect x={x - 30} y={y - 3} width={w - 26} height="6" rx="3" className={hot ? acc : soft} />
          </g>
        );
      })}
      {cols.map((x, i) => (
        <rect key={x} x={x - 40} y="58" width="40" height="5" rx="2.5" className={i === 0 ? acc : soft} />
      ))}
    </>
  );
}

function Storefront() {
  return (
    <Browser>
      <rect x="90" y="110" width="80" height="12" rx="6" className={acc} />
      <rect x="560" y="110" width="140" height="12" rx="6" className={soft} />
      {[0, 1, 2].map((c) =>
        [0, 1].map((r) => (
          <g key={`${c}${r}`}>
            <rect x={90 + c * 215} y={150 + r * 150} width="195" height="105" rx="8" className={soft} />
            {c === 1 && r === 0 && <rect x={90 + c * 215} y={150} width="195" height="105" rx="8" className="fill-accent-soft" />}
            <rect x={90 + c * 215} y={264 + r * 150} width="110" height="7" rx="3.5" className="fill-line-strong" />
            <rect x={90 + c * 215} y={278 + r * 150} width="60" height="7" rx="3.5" className={soft} />
          </g>
        )),
      )}
    </Browser>
  );
}

function Matches() {
  return (
    <>
      <rect x="40" y="40" width="720" height="420" rx="14" className={box} />
      {/* pitch */}
      <g className={`${ln} fill-none`} strokeWidth="1.5">
        <rect x="430" y="80" width="290" height="340" rx="10" />
        <line x1="430" y1="250" x2="720" y2="250" />
        <circle cx="575" cy="250" r="44" />
        <rect x="505" y="80" width="140" height="56" />
        <rect x="505" y="364" width="140" height="56" />
      </g>
      {[[520, 170], [630, 170], [575, 320], [490, 340], [660, 340]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="11" className={i === 2 ? acc : "fill-surface-2 stroke-line-strong"} />
      ))}
      {/* phone */}
      <rect x="110" y="70" width="240" height="360" rx="28" className="fill-surface stroke-line-strong" strokeWidth="1.5" />
      <rect x="205" y="82" width="50" height="7" rx="3.5" className={soft} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="130" y={115 + i * 98} width="200" height="84" rx="12" className={i === 0 ? "fill-accent-soft stroke-accent" : "fill-surface-2"} />
          <rect x="146" y={131 + i * 98} width="100" height="8" rx="4" className={i === 0 ? acc : "fill-line-strong"} />
          <rect x="146" y={149 + i * 98} width="70" height="6" rx="3" className="fill-line-strong" />
          <rect x="146" y={170 + i * 98} width="46" height="16" rx="8" className={i === 0 ? acc : soft} />
        </g>
      ))}
    </>
  );
}

function Operations() {
  const bars = [90, 140, 110, 180, 150, 210, 170];
  return (
    <>
      <rect x="40" y="40" width="720" height="420" rx="14" className={box} />
      <line x1="170" y1="40" x2="170" y2="460" className={ln} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <rect key={i} x="62" y={72 + i * 40} width={i === 0 ? 90 : 70 + (i % 3) * 8} height="10" rx="5" className={i === 0 ? acc : "fill-line-strong"} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={196 + i * 180} y="66" width="164" height="78" rx="10" className={soft} />
          <rect x={212 + i * 180} y="84" width="60" height="7" rx="3.5" className="fill-line-strong" />
          <rect x={212 + i * 180} y="104" width="86" height="16" rx="4" className={i === 1 ? acc : "fill-line-strong"} />
        </g>
      ))}
      <rect x="196" y="164" width="344" height="170" rx="10" className={soft} />
      {bars.map((h, i) => (
        <rect key={i} x={218 + i * 44} y={318 - h * 0.7} width="24" height={h * 0.7} rx="4" className={i === 5 ? acc : "fill-line-strong"} />
      ))}
      <rect x="556" y="164" width="188" height="170" rx="10" className={soft} />
      <circle cx="650" cy="249" r="50" className="fill-none stroke-line-strong" strokeWidth="14" />
      <path d="M650 199 A50 50 0 0 1 700 249" className={`fill-none ${accStroke}`} strokeWidth="14" strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="196" y={356 + i * 24} width="548" height="1" className="fill-line" />
          <rect x="206" y={366 + i * 24} width={90 + i * 14} height="6" rx="3" className="fill-line-strong" />
          <rect x="640" y={366 + i * 24} width="70" height="6" rx="3" className={i === 0 ? acc : soft} />
        </g>
      ))}
    </>
  );
}

function Workflow() {
  const nodes: [number, number, string][] = [
    [110, 250, "a"], [270, 150, "b"], [270, 350, "b"], [440, 150, "c"], [440, 350, "b"], [610, 250, "d"],
  ];
  return (
    <>
      <rect x="40" y="40" width="720" height="420" rx="14" className={box} />
      <g className="fill-none stroke-line-strong" strokeWidth="2">
        <path d="M150 250 C200 250 210 150 230 150" />
        <path d="M150 250 C200 250 210 350 230 350" />
        <path d="M310 150 H400" />
        <path d="M310 350 H400" />
        <path d="M480 150 C540 150 550 250 570 250" className={accStroke} />
        <path d="M480 350 C540 350 550 250 570 250" />
      </g>
      {nodes.map(([x, y, k], i) => (
        <g key={i}>
          <rect x={x - 40} y={y - 32} width="80" height="64" rx="14" className={k === "d" ? "fill-accent-soft stroke-accent" : box} strokeWidth="1.5" />
          <circle cx={x - 18} cy={y - 10} r="7" className={k === "d" || k === "a" ? acc : "fill-line-strong"} />
          <rect x={x - 26} y={y + 6} width="52" height="6" rx="3" className="fill-line-strong" />
          <rect x={x - 26} y={y + 17} width="30" height="5" rx="2.5" className={soft} />
        </g>
      ))}
    </>
  );
}

function Website() {
  return (
    <Browser>
      <rect x="90" y="120" width="300" height="22" rx="6" className="fill-line-strong" />
      <rect x="90" y="152" width="240" height="22" rx="6" className="fill-line-strong" />
      <rect x="90" y="190" width="280" height="8" rx="4" className={soft} />
      <rect x="90" y="206" width="220" height="8" rx="4" className={soft} />
      <rect x="90" y="236" width="104" height="30" rx="15" className={acc} />
      <rect x="440" y="120" width="270" height="170" rx="12" className={soft} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={90 + i * 205} y="320" width="185" height="100" rx="10" className={soft} />
          <rect x={104 + i * 205} y="336" width="80" height="8" rx="4" className="fill-line-strong" />
        </g>
      ))}
    </Browser>
  );
}

function Automotive() {
  return (
    <Browser dark>
      <rect x="90" y="115" width="260" height="20" rx="6" className="fill-bg/60" />
      <rect x="90" y="145" width="190" height="20" rx="6" className="fill-bg/60" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={90 + i * 150} y="205" width="130" height="38" rx="8" className="fill-bg/10 stroke-bg/40" />
          <rect x={102 + i * 150} y="221" width="50" height="6" rx="3" className="fill-bg/40" />
          <path d={`M${200 + i * 150} 220 l5 5 l5 -5`} className="fill-none stroke-bg/70" strokeWidth="1.5" />
          {i < 2 && <path d={`M${224 + i * 150} 224 h14 m-5 -5 l5 5 l-5 5`} className="fill-none stroke-accent" strokeWidth="1.5" />}
        </g>
      ))}
      <rect x="550" y="205" width="130" height="38" rx="19" className={acc} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={90 + i * 156} y="290" width="140" height="130" rx="10" className="fill-bg/10" />
      ))}
    </Browser>
  );
}

function Clinic() {
  return (
    <Browser>
      <rect x="560" y="106" width="42" height="18" rx="9" className={acc} />
      <rect x="610" y="106" width="42" height="18" rx="9" className={soft} />
      <rect x="90" y="150" width="260" height="20" rx="6" className="fill-line-strong" />
      <rect x="90" y="180" width="200" height="20" rx="6" className="fill-line-strong" />
      <rect x="90" y="216" width="250" height="8" rx="4" className={soft} />
      <rect x="90" y="232" width="190" height="8" rx="4" className={soft} />
      <rect x="90" y="262" width="120" height="30" rx="15" className={acc} />
      <rect x="430" y="130" width="280" height="190" rx="12" className={soft} />
      <circle cx="570" cy="215" r="38" className="fill-accent-soft stroke-accent" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={90 + i * 156} y="350" width="140" height="70" rx="10" className={soft} />
      ))}
    </Browser>
  );
}

function Content() {
  return (
    <Browser>
      <rect x="90" y="115" width="200" height="16" rx="5" className="fill-line-strong" />
      <rect x="90" y="145" width="360" height="170" rx="10" className={soft} />
      <path d="M200 280 l30 -50 l30 30 l30 -60 l40 80" className={`fill-none ${accStroke}`} strokeWidth="3" strokeLinejoin="round" />
      <rect x="480" y="145" width="230" height="80" rx="10" className={soft} />
      <rect x="480" y="235" width="230" height="80" rx="10" className="fill-accent-soft" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="90" y={338 + i * 26} width={620 - i * 90} height="8" rx="4" className={soft} />
      ))}
    </Browser>
  );
}

const visuals: Record<PlaceholderVisual, () => React.JSX.Element> = {
  hierarchy: Hierarchy,
  storefront: Storefront,
  matches: Matches,
  operations: Operations,
  workflow: Workflow,
  website: Website,
  automotive: Automotive,
  clinic: Clinic,
  content: Content,
};

export function PlaceholderArt({ visual }: { visual: PlaceholderVisual }) {
  const Art = visuals[visual];
  return (
    <svg viewBox="0 0 800 500" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
      <Art />
    </svg>
  );
}
