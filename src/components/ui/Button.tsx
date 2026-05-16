import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils/cn';
import { sound } from '@/lib/audio/sound-controller';

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 select-none whitespace-nowrap will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold';

const variants = {
  primary:
    'bg-gold text-bg hover:bg-[#e8b85d] hover:shadow-[0_8px_24px_rgba(212,167,81,0.3)] active:scale-[0.98]',
  secondary:
    'bg-transparent text-ink border border-line hover:border-gold hover:text-gold active:scale-[0.98]',
  ghost:
    'bg-transparent text-ink-2 hover:text-gold hover:bg-gold-soft',
};

const sizes = {
  sm: 'text-xs px-3.5 py-1.5',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & { as?: 'button' };

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & { as: 'a'; href: string };

export type ButtonComponentProps = ButtonProps | AnchorProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonComponentProps>(
  (props, ref) => {
    const { variant = 'primary', size = 'md', className, onClick } = props;
    const styles = cn(base, variants[variant], sizes[size], className);

    if (props.as === 'a') {
      const { as: _as, variant: _v, size: _s, className: _c, onClick: _o, ...anchorProps } = props;
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...anchorProps}
          className={styles}
          onClick={(e) => {
            sound.play('click');
            onClick?.(e as unknown as React.MouseEvent<HTMLAnchorElement>);
          }}
        />
      );
    }

    const { as: _as, variant: _v, size: _s, className: _c, onClick: _o, ...buttonProps } = props as ButtonProps;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={buttonProps.type ?? 'button'}
        {...buttonProps}
        className={styles}
        onMouseEnter={(e) => {
          sound.play('hover');
          buttonProps.onMouseEnter?.(e);
        }}
        onClick={(e) => {
          sound.play('click');
          onClick?.(e);
        }}
      />
    );
  },
);

Button.displayName = 'Button';
