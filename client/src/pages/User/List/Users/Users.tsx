/* eslint-disable import/no-unresolved */
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent } from '@/components/ui/tabs'
// eslint-disable-next-line import/no-duplicates
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { File, ListFilter, PlusCircle } from 'lucide-react'
import UserItem from './UserItem'
export default function Users() {
  return (
    <div>
      <Tabs defaultValue='all'>
        <div className='flex items-center'>
          <div className='ml-auto flex items-center gap-2'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='sm' className='h-7 gap-1'>
                  <ListFilter className='h-3.5 w-3.5' />
                  <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Filter</span>
                </Button>
              </DropdownMenuTrigger>
            </DropdownMenu>
            <Button size='sm' variant='outline' className='h-7 gap-1'>
              <File className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Export</span>
            </Button>
            <Button size='sm' className='h-7 gap-1'>
              <PlusCircle className='h-3.5 w-3.5' />
              <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>Add Product</span>
            </Button>
          </div>
        </div>
        <TabsContent value='all'>
          <Card x-chunk='dashboard-06-chunk-0'>
            <CardHeader>
              <CardTitle>Users</CardTitle>
              <CardDescription>Manage your products and view their sales performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='hidden w-[100px] sm:table-cell'>
                      <span className='sr-only'>Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead className='hidden md:table-cell'>Job</TableHead>
                    <TableHead className='hidden md:table-cell'>Created at</TableHead>
                    <TableHead className='hidden md:table-cell'>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <UserItem />
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className='text-xs text-muted-foreground'>
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
