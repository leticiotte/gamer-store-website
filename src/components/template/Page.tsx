import Footer from './Footer';
import Header from './Header';

export interface PageProps {
  className?: string;
  children: any;
  withoutHeader?: boolean;
  withoutFooter?: boolean;
  withoutContainer?: boolean;
  withoutPadding?: boolean;
}

export default function Page(props: PageProps) {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, #2d0064 0%, #0d001c 100%)',
      }}
    >
      <div
        className="flex-1 flex flex-col w-screen"
        style={{ background: 'url("/background.png")' }}
      >
        {props.withoutHeader ? null : <Header />}

        <main
          className={`flex-1 flex flex-col 
            ${props.className}
            ${props.withoutContainer ? '' : 'container'}
            ${props.withoutPadding ? '' : 'py-10'}
            `}
        >
          {props.children}
        </main>
        {props.withoutFooter ? null : <Footer />}
      </div>
    </div>
  );
}
