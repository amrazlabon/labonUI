// 'use client'
// import { createContext, useState, useContext, Dispatch, SetStateAction, ReactNode } from 'react';

// interface BookingData {
//     id: number;
//     firstName: string;
//     lastName: string;
//     userName: string;
//     time: string;
//   }
  
//   interface BookingContextType {
//     bookingData: BookingData | null;
//     setBookingData: Dispatch<SetStateAction<BookingData | null>>;
//   }
  
//   const defaultBookingContext: BookingContextType = {
//     bookingData: null,
//     setBookingData: () => {}
//   };
  
// const BookingContext = createContext<BookingContextType>(defaultBookingContext);

// export const useBooking = () => {
//   return useContext(BookingContext);
// };

// export const BookingProvider = ({ children }: { children: ReactNode }) => {
//   const [bookingData, setBookingData] = useState<BookingData | null>(null);

//   return (
//     <BookingContext.Provider value={{ bookingData, setBookingData }}>
//       {children}
//     </BookingContext.Provider>
//   );
// };


