export default function AvatarGroup({ avatars }: { avatars: string[] }) {
  return <div>{avatars?.map((avatar, ix) => <div key={ix}></div>)}</div>
}
