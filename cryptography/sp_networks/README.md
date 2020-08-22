---
Title: SP Networks - Computerphile
Blog: false
---

<https://www.youtube.com/watch?v=DLjzI5dX8jc>

Old Encryption:

e.g. Caesar Cipher/Enigma Machine (substitution cipher)

```
1 -> C1 (ciphertext)
2 -> C2
3 -> C3
4 -> C4
```

Since the cipher text is a has a block size of one (one to one; encrypts one character into exactly one other), its easy to reverse by analyzing letter frequencies or brute force. If someone knows what your mapping function is, its very easy to reverse.

Modern Encryption uses more block sizes. A block cipher takes a block size of 'n' and turns it into an output of size 'n' (e.g. 128-bits.)

SP networks combine a Substitution and a Permutation (swapping/xor-ing).

S-box - takes n bits of input, and outputs n bits of output. It maps inputs to outputs, in *hopefully* a random way.

S-box(4) would take 4 bits of input and output 4, giving it 2^4 combinations. (0-15)

P-box - maps input bits to output bits.

![sp-box](./images/sp-box.png)

One Substitution/Permutation through an SP-box is called a **round**.

If someone knows what substitutions and permutations your SP-box does (which is typically included in the algorithm), they can easily reverse it.

In order to make the cipher text harder to reverse, you introduce a secret key:

Expand the key (using a *key schedule*) so that its size `M*n`, and split it up into chunks that are the same size as `M`.

In between each round, XOR the `MESSAGE` with the chunk of the `KEY`. That way, once the key is removed, its not possible to reverse the message even if one knows the algorithm.

```
m: message
lm: length of message
n: rounds
k: key

expand k to lm * n # key schedule
for r in n:
    m: m xor k[lm * r: lm * (r + 1)] # slice parts of the key
    m: sp-box(m) # one round
```

It would be trivial (in encryption terms) to decompile the code and figure out what an SP box is doing, so keeping that secret is not a good strategy. In that sense, the key is your password; if its leaked they can invert the SP-box and XOR again repeatedly to get your original message

The number of rounds a Modern Encryption strategy uses is a compromise between speed and encryption strength.
