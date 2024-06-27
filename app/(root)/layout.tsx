import Sidebar from '@/components/Sidebar';

export default function Rootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  const loggedIn= {firstName: 'Aman', lastName: 'VV'}
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      {children}
    
  </main>
  )
}
