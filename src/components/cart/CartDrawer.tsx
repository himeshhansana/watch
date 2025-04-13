import React from 'react';
import { Link } from 'react-router-dom';
import { XIcon, ShoppingBagIcon, TrashIcon } from 'lucide-react';
interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}
const CartDrawer: React.FC<CartDrawerProps> = ({
  open,
  onClose
}) => {
  // Mock cart data
  const cartItems = [];
  const subtotal = 0;
  const shipping = 0;
  const total = subtotal + shipping;
  const freeShippingThreshold = 500;
  const progressToFreeShipping = subtotal / freeShippingThreshold * 100;
  return <>
      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300" onClick={onClose} />}
      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 w-full md:w-96 h-full bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-800">
            <h2 className="text-xl font-medium flex items-center">
              <ShoppingBagIcon size={20} className="mr-2" />
              Your Cart
            </h2>
            <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
              <XIcon size={20} />
            </button>
          </div>
          {/* Cart Items */}
          <div className="flex-grow overflow-y-auto py-4">
            {cartItems.length === 0 ? <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <ShoppingBagIcon size={48} className="text-gray-600 mb-4" />
                <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">
                  Add some luxury timepieces to get started.
                </p>
                <button onClick={onClose} className="px-6 py-3 bg-gold-500 text-gray-900 rounded hover:bg-gold-600 transition-colors duration-300" style={{
              backgroundColor: '#D4AF37'
            }}>
                  Continue Shopping
                </button>
              </div> : <div className="px-4 space-y-4">
                {/* Cart items would go here */}
              </div>}
          </div>
          {/* Free Shipping Progress */}
          <div className="px-4 py-3 bg-gray-850 border-t border-gray-800">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress to Free Shipping</span>
              <span>
                ${subtotal} of ${freeShippingThreshold}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gold-500 h-2 rounded-full transition-all duration-500" style={{
              width: `${Math.min(progressToFreeShipping, 100)}%`,
              backgroundColor: '#D4AF37'
            }} />
            </div>
            {subtotal < freeShippingThreshold && <p className="text-xs mt-1 text-gray-400">
                Add ${freeShippingThreshold - subtotal} more to get free
                shipping!
              </p>}
          </div>
          {/* Summary */}
          <div className="p-4 border-t border-gray-800">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span>
                  {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-lg font-medium pt-2 border-t border-gray-800">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link to="/checkout" className="w-full py-3 bg-gold-500 text-gray-900 rounded flex items-center justify-center font-medium hover:bg-gold-600 transition-colors duration-300" style={{
            backgroundColor: '#D4AF37'
          }}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </>;
};
export default CartDrawer;