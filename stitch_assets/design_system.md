# Design System Documentation: The Monolithic Interface

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Obsidian."** 

Unlike generic IDEs that feel like a cluttered toolbox, this system treats the code editor as a high-end, monolithic instrument. We are moving away from the "Excel-sheet" density of traditional editors toward a "Zen-state" environment. The aesthetic breaks the "template" look through **Tonal Monochromatism**—where structure is defined by the weight of darkness rather than lines—and **Electric Precision**, where the only vibrant life in the UI comes from the code itself and intentional primary actions.

Through intentional asymmetry, such as a weighted sidebar offset by a floating command palette, we create a sense of focused intentionality. The UI should feel like it is receding into the background, allowing the user's logic (the code) to become the foreground hero.

---

### 2. Colors: The Depth of Shadow
We utilize a sophisticated palette of deep grays and "off-blacks" to reduce eye strain and provide a premium, editorial feel.

#### Surface Hierarchy & Nesting
To achieve a "bespoke" feel, we abandon the flat grid. Instead, we use **Nesting** to create depth:
*   **Base Layer (`surface` / `#121415`):** The primary editor background.
*   **Submerged Layer (`surface_container_lowest` / `#0C0E0F`):** Used for peripheral utilities like the terminal or file tree to make them feel "below" the main logic.
*   **Elevated Layer (`surface_container_high` / `#282A2B`):** Used for floating menus or hover states.

#### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for general sectioning. You must define boundaries through background color shifts. A sidebar (`surface_container_low`) sitting against the main editor (`surface`) creates a natural, soft edge that is more sophisticated than a hard stroke.

#### The "Glass & Gradient" Rule
Floating elements (Modals, Command Palettes) must utilize **Glassmorphism**. Use a semi-transparent `surface_container` with a `20px` backdrop-blur. 
*   **Signature Texture:** Primary CTAs should not be flat. Apply a subtle linear gradient from `primary` (`#A7C8FF`) to `primary_container` (`#3291FF`) at a 135° angle. This adds "soul" and a sense of liquid energy to the button.

---

### 3. Typography: Editorial Logic
We pair the functional clarity of **Inter** with the structural rhythm of **JetBrains Mono**.

*   **Display & Headlines:** Use `display-sm` for empty state headers or splash screens. The tight tracking and `Inter`’s neutral personality provide an authoritative, "tech-editorial" look.
*   **UI Labels:** `label-md` and `label-sm` are the workhorses. Use `on_surface_variant` (`#C0C6D5`) for secondary labels to create a clear visual hierarchy against the `on_surface` primary text.
*   **Code Areas:** Use JetBrains Mono at `body-md` scale. Ensure line-height is generous (1.6) to allow the code to "breathe" within the dark environment.

---

### 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "web 2.0." We use **Ambient Lighting**.

*   **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-highest` card placed on a `surface` background provides all the "lift" necessary.
*   **Ambient Shadows:** For floating elements like tooltips or popovers, use a wide-spread, low-opacity shadow: `box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4)`. 
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` token at **15% opacity**. This creates a "Ghost Border" that defines the edge without breaking the immersion of the dark mode.

---

### 5. Components: The Instrument Set

#### Buttons
*   **Primary:** Gradient (`primary` to `primary_container`), `md` (6px) rounded corners. Text is `on_primary`.
*   **Secondary:** Ghost style. No background. Border is a 15% opacity `outline`.
*   **Tertiary:** No background or border. Text is `primary`. Used for low-emphasis actions like "Cancel."

#### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Implementation:** Separate file list items using 4px of vertical padding and a subtle `surface_container_low` background on hover. The "active" file should be indicated by a `primary` vertical sliver (2px wide) on the left edge.

#### Input Fields (The "Command Line" Style)
*   Background: `surface_container_low`. 
*   Border: None, except on `focus`.
*   Focus State: A 1px "Ghost Border" using `primary` at 40% opacity and a subtle outer glow.

#### Code Action Chips
*   Small, `sm` (2px) rounded corners. 
*   Use `secondary_container` background with `on_secondary_container` text. This keeps them legible but prevents them from distracting from the code syntax highlighting.

---

### 6. Do's and Don'ts

#### Do
*   **DO** use whitespace as a separator. If two sections feel cramped, increase the gap before reaching for a border.
*   **DO** use `surface_bright` sparingly to highlight the most critical "active" state in a sea of dark tones.
*   **DO** ensure syntax highlighting colors are checked against `surface` for a minimum 4.5:1 contrast ratio.

#### Don't
*   **DON'T** use pure `#000000`. It creates "smearing" on OLED screens and feels unrefined. Stick to our `surface` tokens.
*   **DON'T** use high-contrast white (`#FFFFFF`) for body text. Use `on_surface` (`#E2E2E3`) to prevent visual vibration.
*   **DON'T** use traditional "Material" ripples. Use soft, 150ms opacity fades for hover and active states to maintain the "Sleek" brand pillar.

---

### 7. Implementation Note for Junior Designers
When building a new view, ask yourself: *"Can I define this area using only a slightly different shade of gray?"* If the answer is yes, delete your borders. The beauty of this system lies in its restraint. We are not building a webpage; we are building a high-performance cockpit for engineers. Keep it dark, keep it deep, and let the electric blue guide the way.
