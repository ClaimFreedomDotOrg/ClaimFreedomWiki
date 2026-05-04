<template>
  <a
    class="synthesis-banner"
    href="https://github.com/ClaimFreedomDotOrg/ClaimFreedomWiki/tree/main/public/Synthesis"
  >
    <div class="synthesis-banner__inner">
      <div class="synthesis-banner__eyebrow">
        ⚡ Released into the Public Domain · May 4, 2026 · No Permission Required ⚡
      </div>
      <div class="synthesis-banner__title">
        The Substrate Coupling Synthesis Is Complete
      </div>
      <div class="synthesis-banner__body">
        Earth is a cell. The membrane has been thickened on purpose. The whole body of
        Christ is sick — and the engineering specification for the cure is now in
        everyone's hands at once. Free energy, inertial decoupling, phase transparency,
        and the biology of indefinite life all fall out of one equation:
        <em>coherence-coupled Navier–Stokes</em>. Fear is the viscosity. Love is the
        laminarizer. The firmament is a phase boundary, and it tears at low Reynolds.
      </div>
      <div class="synthesis-banner__call">
        If any part of this lands in your chest — you are an immune cell. You volunteered.
        Welcome home.
      </div>
      <div class="synthesis-banner__cta">Read the Full Synthesis →</div>
      <div class="synthesis-banner__meta">
        13 documents · public/Synthesis/ · Start with “Earth Is a Cell” then “Substrate Coupling”
      </div>
    </div>
  </a>
</template>

<style scoped>
.synthesis-banner {
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(90deg, #0a0a0a 0%, #1a0f1f 50%, #0a0a0a 100%);
  border-top: 2px solid #c8a96e;
  border-bottom: 2px solid #c8a96e;
  padding: 1.5rem 1.25rem;
  margin-top: var(--vp-nav-height, 64px);
  box-shadow: 0 4px 24px rgba(200, 169, 110, 0.25);
  animation: synthesisGlow 4s ease-in-out infinite;
  transition: transform 0.2s ease;
}
.synthesis-banner:hover {
  transform: translateY(-1px);
}
.synthesis-banner__inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}
.synthesis-banner__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  color: #c8a96e;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.6rem;
}
.synthesis-banner__title {
  font-size: clamp(1.4rem, 3vw, 2.1rem);
  font-weight: 900;
  color: #f5f0e6;
  line-height: 1.15;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}
.synthesis-banner__body {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: #d8c9a8;
  line-height: 1.55;
  max-width: 850px;
  margin: 0 auto 0.85rem;
}
.synthesis-banner__call {
  font-size: 0.95rem;
  color: #f5f0e6;
  font-weight: 600;
  margin-bottom: 0.7rem;
}
.synthesis-banner__cta {
  display: inline-block;
  padding: 0.65rem 1.6rem;
  background: #c8a96e;
  color: #0a0a0a;
  font-weight: 800;
  border-radius: 4px;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 2px 12px rgba(200, 169, 110, 0.4);
}
.synthesis-banner__meta {
  font-size: 0.75rem;
  color: #8a7d68;
  margin-top: 0.7rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
@keyframes synthesisGlow {
  0%, 100% { box-shadow: 0 4px 24px rgba(200, 169, 110, 0.25); }
  50% { box-shadow: 0 4px 36px rgba(200, 169, 110, 0.5); }
}
</style>
