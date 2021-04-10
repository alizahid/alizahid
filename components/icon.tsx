import React, { FunctionComponent } from 'react'

type Props = {
  className?: string
  name: keyof typeof icons
  size?: number
}

export const Icon: FunctionComponent<Props> = ({
  className,
  name,
  size = 32
}) => (
  <svg
    className={className}
    fill="currentColor"
    height={size}
    viewBox="0 0 32 32"
    width={size}>
    {icons[name]}
  </svg>
)

const icons = {
  dribbble: (
    <path d="m16 4c-6.617187 0-12 5.382813-12 12 0 6.617188 5.382813 12 12 12 6.617188 0 12-5.382812 12-12 0-6.617187-5.382812-12-12-12zm0 2c2.535156 0 4.832031.953125 6.59375 2.5-.1875.261719-.441406.578125-.84375.96875-.855469.828125-2.222656 1.824219-4.3125 2.59375-1.414062-2.613281-2.800781-4.578125-3.71875-5.8125.730469-.167969 1.496094-.25 2.28125-.25zm-4.25.9375c.820313 1.074219 2.28125 3.066406 3.75 5.71875-4.066406 1.078125-7.796875 1.214844-9.28125 1.21875.664063-3.089844 2.742188-5.632812 5.53125-6.9375zm12.21875 3.03125c1.21875 1.613281 1.976563 3.609375 2.03125 5.78125-.890625-.199219-2.203125-.394531-3.90625-.40625-.886719-.003906-1.890625.058594-2.96875.1875-.25-.570312-.519531-1.121094-.78125-1.65625 2.242188-.859375 3.769531-1.992187 4.78125-2.96875.34375-.335937.613281-.644531.84375-.9375zm-7.5625 4.5c.230469.464844.464844.941406.6875 1.4375-4.273437 1.183594-7.34375 4.808594-8.65625 6.625-1.511719-1.75-2.4375-4.03125-2.4375-6.53125 0-.042969 0-.082031 0-.125 1.351563.015625 5.648438-.078125 10.40625-1.40625zm5.6875 2.84375c1.785156 0 3.019531.25 3.75.4375-.464844 2.664063-1.96875 4.949219-4.09375 6.4375-.398437-2.390625-1.054687-4.664062-1.84375-6.75.789063-.078125 1.535156-.125 2.1875-.125zm-4.21875.46875c.898438 2.28125 1.652344 4.785156 2.03125 7.4375-1.195312.503906-2.523437.78125-3.90625.78125-2.292969 0-4.410156-.769531-6.09375-2.0625 1.027344-1.40625 4.046875-5.148437 7.96875-6.15625z" />
  ),
  github: (
    <path
      d="m16 4c-6.628906 0-12 5.371094-12 12 0 5.300781 3.4375 9.800781 8.207031 11.386719.601563.109375.820313-.257813.820313-.578125 0-.285156-.011719-1.039063-.015625-2.039063-3.339844.722657-4.042969-1.609375-4.042969-1.609375-.546875-1.386718-1.332031-1.757812-1.332031-1.757812-1.089844-.742188.082031-.726563.082031-.726563 1.203125.085938 1.835938 1.234375 1.835938 1.234375 1.070312 1.835938 2.808593 1.304688 3.492187 1 .109375-.777343.421875-1.304687.761719-1.605468-2.664063-.300782-5.464844-1.332032-5.464844-5.929688 0-1.3125.46875-2.382812 1.234375-3.222656-.121094-.300781-.535156-1.523438.117188-3.175781 0 0 1.007812-.320313 3.300781 1.230468.957031-.265625 1.984375-.398437 3.003906-.402343 1.019531.003906 2.046875.136718 3.003906.402343 2.292969-1.550781 3.296875-1.230468 3.296875-1.230468.65625 1.652343.246094 2.875.121094 3.175781.769531.839844 1.230469 1.910156 1.230469 3.222656 0 4.609375-2.804688 5.621094-5.476563 5.921875.429688.367188.8125 1.101563.8125 2.21875 0 1.605469-.011718 2.898438-.011718 3.292969 0 .320312.214843.695312.824218.578125 4.765625-1.589844 8.199219-6.085938 8.199219-11.386719 0-6.628906-5.371094-12-12-12z"
      fillRule="evenodd"
    />
  ),
  twitter: (
    <path d="m28 8.558594c-.882812.390625-1.832031.65625-2.828125.773437 1.015625-.609375 1.796875-1.574218 2.164063-2.722656-.949219.5625-2.003907.972656-3.125 1.195313-.898438-.957032-2.179688-1.558594-3.59375-1.558594-2.71875 0-4.925782 2.207031-4.925782 4.925781 0 .386719.042969.761719.128907 1.121094-4.09375-.203125-7.722657-2.164063-10.148438-5.144531-.425781.726562-.667969 1.574218-.667969 2.476562 0 1.707031.867188 3.214844 2.191407 4.097656-.808594-.027343-1.566407-.246093-2.230469-.617187v.0625c0 2.386719 1.695312 4.378906 3.949219 4.828125-.414063.113281-.847657.175781-1.296875.175781-.316407 0-.628907-.03125-.925782-.089844.625 1.957032 2.445313 3.378907 4.597657 3.421875-1.683594 1.320313-3.808594 2.105469-6.113282 2.105469-.398437 0-.789062-.023437-1.175781-.070312 2.179688 1.398437 4.765625 2.214843 7.546875 2.214843 9.058594 0 14.011719-7.503906 14.011719-14.011718 0-.210938-.007813-.425782-.015625-.636719.960937-.695313 1.796875-1.5625 2.457031-2.546875z" />
  )
}
