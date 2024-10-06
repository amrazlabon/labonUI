import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useBlockNavigation = (isTaskIncomplete : any) => {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (event : any) => {
      if (isTaskIncomplete) {
        event.preventDefault();
        event.returnValue = ''; // For modern browsers
      }
    };

    const handleRouteChange = (url : any) => {
      if (isTaskIncomplete) {
        alert('Finish the work first!');
        router.replace('/labs/booking'); // Navigate back to the task route
      }
    };

    // Attach the event listener for blocking refresh/close
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Attach a single global event listener for route changes
    // router.events?.on('routeChangeStart', handleRouteChange);

    // Prevent programmatic navigation within the app (one-time listener)
    const handleLinkClick = (event : any) => {
      if (isTaskIncomplete) {
        event.preventDefault();
        alert('Finish the work first!');
      }
    };

    // Attach link click event listener to all anchor tags
    const links = document.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      // router.events?.off('routeChangeStart', handleRouteChange);
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
    };
  }, [isTaskIncomplete, router]);

  return null;
};

export default useBlockNavigation;
