import { ref, push, set } from 'firebase/database';
import { database } from '../../COMPONENTS/server/firebase';  

export const salvarPedidoNoFirebase = (pedidoData) => {
  const pedidosRef = ref(database, 'pedidos');
  const novoPedidoRef = push(pedidosRef);
  console.log('Salvando pedido no Firebase:', pedidoData);

  return set(novoPedidoRef, pedidoData);
};
