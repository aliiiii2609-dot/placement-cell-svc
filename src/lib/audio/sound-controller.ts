import { Howl } from 'howler';

/**
 * Sound design controller for the Placement Cell site.
 *
 * Behaviour:
 *   - Disabled by default. The user must enable sound via the footer toggle.
 *   - All cues are short, refined, and rate-gated (one per cue per 2.5s).
 *   - Audio files live at /public/audio/<id>.mp3 once sourced.
 *   - Until audio files are sourced, calls are no-ops, the site still runs.
 *
 * To wire real audio:
 *   1. Drop royalty-cleared audio clips into /public/audio matching the
 *      filenames in CUES below.
 *   2. Confirm Howl initialises without 404s in browser console.
 *   3. Enable the footer toggle to test.
 */

export type SoundCue =
  | 'hover'
  | 'click'
  | 'submit'
  | 'transition'
  | 'load-complete'
  | 'counter-tick'
  | 'title-card'
  | 'whoosh';

const CUES: Record<SoundCue, { src: string; volume: number; minIntervalMs: number }> = {
  hover: { src: '/audio/hover.mp3', volume: 0.18, minIntervalMs: 90 },
  click: { src: '/audio/click.mp3', volume: 0.3, minIntervalMs: 120 },
  submit: { src: '/audio/submit-chime.mp3', volume: 0.5, minIntervalMs: 2000 },
  transition: { src: '/audio/whoosh-soft.mp3', volume: 0.35, minIntervalMs: 600 },
  'load-complete': { src: '/audio/load-complete.mp3', volume: 0.45, minIntervalMs: 5000 },
  'counter-tick': { src: '/audio/tick.mp3', volume: 0.18, minIntervalMs: 80 },
  'title-card': { src: '/audio/title-card.mp3', volume: 0.5, minIntervalMs: 3000 },
  whoosh: { src: '/audio/whoosh.mp3', volume: 0.4, minIntervalMs: 600 },
};

class SoundController {
  private enabled = false;
  private howls: Partial<Record<SoundCue, Howl>> = {};
  private lastPlayed: Partial<Record<SoundCue, number>> = {};
  private warned = new Set<SoundCue>();

  isEnabled(): boolean {
    return this.enabled;
  }

  setEnabled(value: boolean): void {
    this.enabled = value;
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('svc-sound-enabled', value ? '1' : '0');
      } catch {
        /* non-fatal */
      }
    }
  }

  loadFromStorage(): void {
    if (typeof window === 'undefined') return;
    try {
      this.enabled = window.localStorage.getItem('svc-sound-enabled') === '1';
    } catch {
      /* non-fatal */
    }
  }

  play(cue: SoundCue): void {
    if (!this.enabled) return;
    const def = CUES[cue];
    const now = Date.now();
    const last = this.lastPlayed[cue] ?? 0;
    if (now - last < def.minIntervalMs) return;
    this.lastPlayed[cue] = now;

    let howl = this.howls[cue];
    if (!howl) {
      howl = new Howl({
        src: [def.src],
        volume: def.volume,
        preload: false,
        onloaderror: () => {
          if (!this.warned.has(cue)) {
            this.warned.add(cue);
            // eslint-disable-next-line no-console
            console.warn(`[sound] missing ${def.src}. Drop the file at /public${def.src} when ready.`);
          }
        },
      });
      this.howls[cue] = howl;
    }
    try {
      howl.play();
    } catch {
      /* non-fatal */
    }
  }
}

export const sound = new SoundController();
