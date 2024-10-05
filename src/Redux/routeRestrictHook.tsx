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

    // Attach the event listener for blocking refresh/close
    window.addEventListener('beforeunload', handleBeforeUnload);

    const handleRouteChange = (url : any) => {
      if (isTaskIncomplete) {
        alert('Finish the work first!');
        router.replace('/labs/booking'); // Navigate back to the task route
      }
    };

    // Prevent programmatic navigation within the app
    const links = document.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        if (isTaskIncomplete) {
          event.preventDefault();
          alert('Finish the work first!');
        }
      });
    });

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      links.forEach(link => link.removeEventListener('click', handleRouteChange));
    };
  }, [isTaskIncomplete, router]);

  return null;
};

export default useBlockNavigation;
