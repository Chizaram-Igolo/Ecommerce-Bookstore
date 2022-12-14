/**
 * React imports.
 */
import { useRouter } from "next/router";
import Head from "next/head";
import { ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

/**
 * Vendor-defined UI components/hooks/utilities/etc.
 * `TopBarProgress` tracks page load progress and shows a progress bar at the
 * the top of the page when navigating to a new route.
 */
import { ToastProvider } from "react-toast-notifications";
const TopBarProgress = require("react-topbar-progress-indicator");

/**
 * This checks on user internet connectivity and lets them know when
 * they are disconnected.
 */
import ConnectivityListener from "@ConnectivityListener/ConnectivityListener";

/**
 * Context provider containing application-wide state.
 */
import { AuthProvider } from "@contexts/AuthContext";

/**
 * Developer-defined UI components/hooks/constants.
 */
import { TopBarProgressConfig } from "@utils/constants";
import Navbar from "@Navigation/Navbar";
import Footer from "@Footer";
import RouteGuard from "@components/RouteGuard";
import ErrorBoundary from "@ErrorBoundaries/ErrorBoundary";
import SearchBar from "@Navigation/SearchBar";

TopBarProgress.config(TopBarProgressConfig);

interface ILayout {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Layout: React.FC<ILayout> = ({ children }): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  /**
   * Hook into router events to show or hide the progress bar
   * when the user navigates to another route.
   */
  useEffect(() => {
    const showTopbar = () => setLoading(true);
    const hideTopbar = () => setLoading(false);

    router.events.on("routeChangeStart", showTopbar);
    router.events.on("routeChangeError", hideTopbar);
    router.events.on("routeChangeComplete", hideTopbar);

    return () => {
      router.events.off("routeChangeStart", showTopbar);
      router.events.off("routeChangeError", hideTopbar);
      router.events.off("routeChangeComplete", hideTopbar);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <ConnectivityListener />
          <ErrorBoundary router={router}>
            <RouteGuard>
              {loading && <TopBarProgress />}
              <Head>
                <title>E-Commerce - Bookstore</title>
              </Head>
              <Navbar />

              {router.pathname.indexOf("signin") === -1 &&
                router.pathname.indexOf("signup") === -1 && <SearchBar />}

              {children}

              {/* {!router.query.hasOwnProperty("docId") && <Footer />} */}
            </RouteGuard>
          </ErrorBoundary>
        </QueryClientProvider>
      </ToastProvider>
    </AuthProvider>
  );
};

export default Layout;
