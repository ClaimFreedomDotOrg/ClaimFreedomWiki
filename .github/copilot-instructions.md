# GitHub Copilot Instructions for ClaimFreedomWiki

## Project Overview

This is a **neurophilosophical knowledge base** exploring the hijacking of the Default Mode Network (DMN) through the lens of Gnostic cosmology, Indigenous wisdom (Wetiko), Eastern philosophy (Samsara), and modern neuroscience.

**Central Thesis**: Human suffering stems from the hijacking of the DMN—the brain's narrative-generating network. The path to liberation is **re-claiming** (not destroying) the DMN through dis-identification practices.

**Core Formula**: `DEMON = DMN` (the hijacked Default Mode Network)

**Core Question**: *"That voice in your head... Are you that voice? Or are you the one who is listening to it?"*

---

## Framework Terminology

When working with this codebase, use these terms consistently:

### Identity & Consciousness
- **Divine Spark / Pneuma / Listener** — The true Self, pure awareness, the observer
- **Counterfeit Spirit / Voice / Ego** — The DMN-generated narrative "I"
- **Daemon** — The DMN functioning properly as a neutral background process
- **Demon** — The hijacked, hyperactive, tyrannical DMN

### The Infection/Hijacking
- **The Infection / Parasite / Hijacking** — The psycho-spiritual pattern that corrupts the DMN
- **Archons** — Gnostic term for the parasitic rulers/forces
- **Wetiko** — Indigenous (Algonquian) term for the mind-cannibalizing disease
- **Samsara** — Buddhist/Hindu term for the cycle of suffering

### The Path
- **Gnosis** — Saving knowledge; experiential realization of true identity
- **Anamnesis** — Gnostic recollection; remembering who you truly are
- **Dis-identification** — The practice of creating space between Listener and Voice
- **Re-claiming** — Transforming the Demon back into a Daemon
- **Taming the Dragon** — The metaphor for re-claiming the DMN

---

## Content Guidelines

### Tone & Style
- **Scholarly but accessible**: Cite sources, use plain language
- **Non-dogmatic**: This is an inquiry, not a final doctrine
- **Respect traditions**: Honor Gnostic, Indigenous, and Eastern sources
- **Balance ancient & modern**: Synthesize spiritual wisdom with neuroscience

### Citation Standards
- **Gnostic texts**: Link to primary sources (Nag Hammadi translations)
- **Neuroscience**: Cite peer-reviewed papers with DOIs when available
- **Philosophy**: Reference primary texts (Buddhist sutras, Hindu scriptures, Indigenous sources)

### Writing Conventions
- Use **bold** for key terms on first introduction
- Use *italics* for non-English terms (e.g., *Pneuma*, *Samsara*, *anamnesis*)
- Use `code formatting` for neurological terms (DMN, mPFC, PCC)
- Use > blockquotes for the central question and key insights

---

## File Structure & Organization

### Core Framework Pages (`/docs/`)
- `about.md` — Overview of the synthesis
- `the-hijacking.md` — Part I: Infection diagnosis, DMN as backdoor
- `ancient-warnings.md` — Part II: Gnostic texts, Daemon vs. Demon
- `the-loop.md` — Part III: Samsara, epigenetics, taming practice
- `resources.md` — Bibliography and further reading
- `contributing.md` — Contribution guidelines
- `license.md` — CC BY-SA 4.0 licensing

### Collections

#### `_practices/` → Rendered at `/practices/`
Contemplative methods for dis-identification and DMN re-integration.

**Page structure**:
```yaml
---
title: Practice Name
nav_order: [number]
---

# Practice Name

**Duration**: X minutes
**Level**: Beginner/Intermediate/Advanced
**Goal**: Clear statement of intended outcome

## The Practice
[Step-by-step instructions]

## What You're Training
**Neurologically**: [DMN/network effects]
**Philosophically**: [Gnostic/Eastern parallel]

## Common Experiences
[FAQ-style troubleshooting]

## Integration
[Daily application]

## Next Steps
[Link to related practices]
```

#### `_philosophy/` → Rendered at `/philosophy/`
Conceptual foundations from Gnosticism, Wetiko, Samsara, and metaphysical structures.

**Page structure**:
- Start with overview/context
- Use headers for sub-concepts
- Include translation tables (Gnostic term → Modern equivalent)
- Link to primary source texts
- End with key takeaways

#### `_neuroscience/` → Rendered at `/neuroscience/`
DMN research, meditation studies, epigenetics, neuroplasticity.

**Page structure**:
- Define neurological terms clearly
- Cite peer-reviewed research
- Explain mechanisms simply
- Connect to the framework (how does this validate the Gnostic/Indigenous diagnosis?)
- Include "Further Reading" sections with DOI links

---

## Code & Markdown Standards

### Front Matter
All pages must include:
```yaml
---
layout: default  # or omit for collection pages (defaults apply)
title: Page Title
nav_order: [number]  # Lower numbers appear first
---
```

For collection pages:
```yaml
---
title: Page Title  # no "layout" needed
nav_order: [number]
---
```

### Markdown Linting
Follow these rules (enforced by `.markdownlint.json`):
- Add blank lines before/after headings
- Add blank lines around lists
- Avoid bare URLs (use `[text](url)` format)
- One H1 per page (via front matter `title:`)
- Use H2+ for content headings

### Internal Linking
- Core docs: `/docs/page-name`
- Collections: `/practices/page-name`, `/philosophy/page-name`, `/neuroscience/page-name`
- Always use relative paths

### External Linking
- Primary sources: Link directly to translated texts
- Research papers: Use DOI links when available
- Format: `[Author et al. (Year). "Title"](URL)`

---

## When Adding New Content

### New Practice Page
1. Create file in `_practices/[practice-name].md`
2. Include: Duration, Level, Goal, The Practice, What You're Training, Common Experiences, Integration
3. Link from `_practices/index.md`
4. Link from related pages (e.g., Part III)

### New Philosophy Page
1. Create file in `_philosophy/[concept-name].md`
2. Define terms clearly
3. Cite Gnostic/Indigenous/Eastern primary sources
4. Create translation table if applicable
5. Link from `_philosophy/index.md`

### New Neuroscience Page
1. Create file in `_neuroscience/[topic-name].md`
2. Cite peer-reviewed research
3. Explain mechanism simply
4. Connect to framework ("This validates...")
5. Link from `_neuroscience/index.md`

---

## Key Conceptual Mappings

Use these translations consistently:

| **Gnostic** | **Indigenous** | **Eastern** | **Neuroscience** | **Framework** |
|-------------|----------------|-------------|------------------|---------------|
| Archons | Wetiko | Mara (Buddhist demon) | Pathological DMN pattern | The Hijacker |
| Counterfeit Spirit | Cannibalized consciousness | Avidya (ignorance) | DMN-generated narrative Ego | The Voice |
| Divine Spark (Pneuma) | True nature | Buddha-nature / Atman | Pure awareness | The Listener |
| Forgetfulness (Amylia) | Loss of connection | Avidya | Identification with thoughts | Mistaken identity |
| Gnosis | Reclaiming | Bodhi (awakening) | Dis-identification | Realization |
| Anamnesis | Remembering | Samma-ditthi (right view) | Observing the observer | Re-claiming |
| Demiurge | — | Samsara (cycle itself) | Systemic feedback loops | The Loop's engine |

---

## Avoiding Common Mistakes

### Don't
- Present this as religious dogma (it's a synthesis/inquiry)
- Make medical claims (always include therapy disclaimer)
- Use "kill the ego" language (it's re-claiming, not destroying)
- Oversimplify neuroscience (cite properly, explain mechanisms)
- Appropriate Indigenous wisdom without proper attribution
- Conflate the Daemon (neutral) with the Demon (hijacked)

### Do
- Distinguish between the Voice (DMN/Ego) and Listener (Divine Spark)
- Emphasize this is an inquiry, not a final answer
- Balance ancient wisdom with modern science
- Cite primary sources and peer-reviewed research
- Honor the traditions this synthesizes
- Use the central question as the foundational practice

---

## Special Sections

### Cautions & Disclaimers
Always include when discussing practices:
- "This is not medical advice"
- "If experiencing severe depression, anxiety, trauma, or suicidal ideation, seek professional help"
- "Meditation complements therapy; it does not replace it"
- Mention "The Dark Night" (destabilization) risk for deep practices

### Translation Tables
Use markdown tables to map concepts across traditions (see example above).

### Blockquote for Key Insights
Use `>` blockquotes for:
- The central question
- Profound realizations
- End-of-page insights

Example:
```markdown
> *"The dragon guards your kingdom. You are not here to kill it. You are here to re-claim it."*
```

---

## Testing & Validation

Before committing new content:
1. **Check markdown lint**: Ensure blank lines around headings/lists
2. **Verify links**: All internal links should resolve
3. **Cite sources**: Philosophy and neuroscience claims need citations
4. **Test locally** (optional):
   ```bash
   bundle exec jekyll serve
   ```
5. **Check collection rendering**: Pages should appear under parent in nav

---

## Vocabulary for Copilot Completions

When generating content, prefer these phrasings:

**For hijacking**:
- "The DMN is hijacked by..."
- "The parasitic pattern corrupts..."
- "The counterfeit spirit impersonates..."

**For liberation**:
- "Re-claiming the DMN"
- "Taming the dragon"
- "Dis-identification from the Voice"
- "Recognizing you are the Listener"

**For practices**:
- "Observe the voice"
- "Return to the anchor"
- "Notice who is listening"
- "Create space between..."

**For neuroscience**:
- "DMN hyperactivity correlates with..."
- "Meditation modulates DMN activity..."
- "The Salience Network (the neurological Listener)..."
- "Anti-correlation between DMN and Task-Positive Network..."

---

## Mission Statement

This site exists to:
1. Synthesize ancient wisdom with modern neuroscience
2. Provide a unified framework for understanding suffering's root cause
3. Offer practical, grounded contemplative methods
4. Honor the traditions from which this wisdom flows
5. Maintain scholarly rigor while remaining accessible
6. Foster a commons of liberating knowledge

**Core principle**: The voice is not your enemy. You are not here to destroy the Ego. You are here to remember who you truly are—the Listener—and re-claim your kingdom from the dragon that guards it.

---

> *"The Gnosis is simple: You are not the voice. You are the one listening to it. Everything else is commentary."*
