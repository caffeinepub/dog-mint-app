# Entity Definitions

## Dog (Motoko + TypeScript)

| Field      | Type   | Constraints                              | Notes                              |
|------------|--------|------------------------------------------|------------------------------------|
| id         | Text   | Non-empty, unique                        | Generated: principal-hash + timestamp |
| name       | Text   | 1–30 chars, non-empty                    | User-provided                      |
| breed      | Text   | One of 8 valid breed keys                | See Breed enum                     |
| coatColor  | Text   | One of 7 valid coat color keys           | See CoatColor enum                 |
| eyeColor   | Text   | One of 5 valid eye color keys            | See EyeColor enum                  |
| accessory  | Text   | One of 6 valid accessory keys            | See Accessory enum                 |
| mintedAt   | Int    | Unix nanoseconds (Time.now())            | Set at mint time, immutable        |

## Breed Enum
| Key        | Display Name     | Visual Traits                                |
|------------|------------------|----------------------------------------------|
| labrador   | Labrador         | Broad head, floppy ears, thick tail           |
| poodle     | Poodle           | Curly coat texture, rounded ears             |
| bulldog    | Bulldog          | Flat face, wide body, short ears             |
| beagle     | Beagle           | Long floppy ears, compact body               |
| husky      | Husky            | Pointed ears, wolf-like face, bushy tail     |
| corgi      | Corgi            | Big pointed ears, long body, short legs      |
| dalmatian  | Dalmatian        | Spots pattern, lean body                     |
| shiba      | Shiba Inu        | Fox-like face, curled tail, alert ears       |

## CoatColor Enum
| Key      | Display Name | Hex       |
|----------|--------------|-----------|
| golden   | Golden       | #D4A017   |
| brown    | Brown        | #795548   |
| black    | Black        | #212121   |
| white    | White        | #F5F5F5   |
| gray     | Gray         | #9E9E9E   |
| cream    | Cream        | #FFF8E1   |
| spotted  | Spotted      | #F5F5F5 with #212121 spots |

## EyeColor Enum
| Key           | Display Name    | Hex      |
|---------------|-----------------|----------|
| brown         | Brown           | #5D4037  |
| blue          | Blue            | #1565C0  |
| green         | Green           | #2E7D32  |
| amber         | Amber           | #FF8F00  |
| heterochromia | Heterochromia   | one brown + one blue |

## Accessory Enum
| Key     | Display Name | Visual Description        |
|---------|--------------|---------------------------|
| none    | None         | No accessory              |
| collar  | Collar       | Colored band around neck  |
| hat     | Party Hat    | Small hat on top of head  |
| bandana | Bandana      | Triangle cloth at neck    |
| bowtie  | Bow Tie      | Bow tie at neck           |
| glasses | Glasses      | Round glasses on face     |

## MintDogInput (Motoko)
```
type MintDogInput = {
  name: Text;
  breed: Text;
  coatColor: Text;
  eyeColor: Text;
  accessory: Text;
};
```
