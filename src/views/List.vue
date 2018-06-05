<template>
  <TransactionList :transactions="transactions" :pending="pending"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransactionList from '@/components/TransactionList.vue'; // @ is an alias to /src
import { Terms, Action, Status, Transaction } from '@/models';
import { setTimeout } from 'timers';

@Component({
  components: {
    TransactionList,
  },
  created() {
    const self = this as List;

    setTimeout(() => {
      self.transactions = new Array(5).fill({}).map((t, index) => ({
        sender: '' + 123 * index,
        receiver: '' + 124 * index,
        broker: '' + 125 * index,
        goal: 6000,
        paid: 3000,
        deadline: new Date(),
        terms: Terms.BackToSender,
        senderAction: Action.Accept,
        receiverAction: Action.Accept,
        status: Status.Fullfilled,
      }));

      self.pending = false;
    }, 1000);
  },
})
export default class List extends Vue {
  public transactions: Transaction[] = [];
  public pending = true;
}
</script>
