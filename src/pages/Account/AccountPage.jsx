import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const AccountPage = () => {

    const {register, handleSubmit, reset, formState:{errors}} = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }
    })

    const onSubmit = (data) => {
        if (data.newPassword || data.confirmPassword) {
            if(data.newPassword !== data.confirmPassword) {
                toast.error('Yangi parollar bir biriga mos emas!')
                return
            }

            if(data.currentPassword !== '1234') {
                toast.error('Eski parol notogri!')
                return
            }
        }

        toast.success('Profil malumotlari yangilandi')
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='my-20 flex items-center justify-between'>
                <div className='flex gap-2 text-[#7f7f7f] text-sm'>
                    <Link to='/'>Home</Link>/
                    <Link className='text-black'>My Account</Link>
                </div>
                <div className='flex items-center'>
                    <p className='text-sm'>Welcome!</p>
                    <p className='text-text-primary text-sm'>MD Rimel</p>
                </div>
            </div>
            <div className='flex gap-[100px]'>
                <div>
                    <ul>
                        <p className='font-medium'>Manage My Account</p>
                        <div className='ml-[35px] mt-4 gap-2 flex flex-col'>
                            <NavLink to='/account' >{({ isActive }) => <li className={isActive ? "text-text-primary" : ''}>My Profile</li>}</NavLink>
                            <NavLink to='/asd'>{({ isActive }) => <li className={isActive ? "text-text-primary" : ''}>Address Book</li>}</NavLink>
                            <NavLink to='/asaf'>{({ isActive }) => <li className={isActive ? "text-text-primary" : ''}>My Payment Options</li>}</NavLink>
                        </div>
                    </ul>
                    <ul className='mt-4'>
                        <p className='font-medium'>My Orders</p>
                        <div className='ml-[35px] mt-4 gap-2 flex flex-col'>
                            <NavLink to='/asfaf' >{({ isActive }) => <li className={isActive ? "text-text-primary" : ''}>My Returns</li>}</NavLink>
                            <NavLink to='/asd'>{({ isActive }) => <li className={isActive ? "text-text-primary" : ''}>My Cancellations</li>}</NavLink>
                        </div>
                    </ul>
                    <ul className='mt-4'>
                        <p className='font-medium'>My WishList</p>
                    </ul>
                    {/* Rustamxojayev Shuxratxoja */}
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='px-20 py-10 shadow-md flex flex-col'>
                    <p className='font-medium text-xl text-text-primary'>Edit Your Profile</p>
                    <div className='flex justify-between mt-4 gap-[50px]'>
                        <div>
                            <Label className=' mb-2 '>First Name</Label>
                            <Input {...register('firstName', {required:true})} placeholder='Md' className='h-[50px] w-[330px] bg-[#F5F5F5]' />
                            {errors.firstName && <p className='text-red-500 text-sm'>Ism kiritish shart</p>}
                        </div>
                        <div>
                            <Label className=' mb-2 '>Last Name</Label>
                            <Input {...register('lastName', {required: true})} placeholder='Rimel' className='h-[50px] w-[330px] bg-[#F5F5F5]' />
                            {errors.lastName && <p className='text-red-500 text-sm'>Familiya kiritish shart</p>}
                        </div>
                    </div>
                    <div className='flex justify-between mt-4 gap-[50px]'>
                        <div>
                            <Label className=' mb-2 '>Email</Label>
                            <Input {...register('email', {required: true})} type='email' placeholder='rimel1111@gmail.com' className='h-[50px] w-[330px] bg-[#F5F5F5]' />
                            {errors.email && <p className='text-red-500 text-sm'>Email kiritish shart</p>}
                        </div>
                        <div>
                            <Label className=' mb-2 '>Address</Label>
                            <Input {...register('address')} placeholder='Kingston, 5236, United State' className='h-[50px] w-[330px] bg-[#F5F5F5]' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-6 gap-4'>
                        <div>
                            <Label className=' mb-2 '>Password Changes</Label>
                            <Input type='password' {...register('currentPassword')} placeholder='Current Passwod' className='h-[50px]  bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Input type='password' {...register('newPassword')} placeholder='New Passwod' className='h-[50px]  bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Input type='password' {...register('confirmPassword')} placeholder='Confirm New Passwod' className='h-[50px]  bg-[#F5F5F5]' />
                        </div>
                    </div>
                    <div className='flex mt-6 justify-end items-center'>
                        <Button onClick={() => reset()} variant='ghost'>Cancel</Button>
                        <button type='submit' className='px-12 py-4 bg-[#db4444] text-white rounded-md'>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AccountPage